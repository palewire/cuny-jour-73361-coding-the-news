"""
Download open Class C housing violations for the Bronx from the NYC HPD
Housing Maintenance Code Violations dataset, and group the results by
building with a total violation count.

Filtering is done server-side via Socrata SoQL query parameters so only the
rows we need are transferred.  The matching rows are fetched in pages of
50,000 so no single request risks timing out.

Output: output/bronx_c_violations.csv

Source: NYC Open Data – Housing Maintenance Code Violations
https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5
"""

# Import the pandas library for reading and analyzing data
import pandas as pd

# Import the pathlib library to create output directories
from pathlib import Path

# Set the base URL for the NYC Open Data Socrata API endpoint for HPD violations
url = "https://data.cityofnewyork.us/resource/wvxf-dwi5.csv"

# Set the number of rows to request per page; 50,000 is a safe size for the Socrata API
page_size = 50_000

# Build the SoQL WHERE clause to pre-filter on the server:
#   boroid=2      → Bronx only
#   class='C'     → immediately hazardous violations only
#   currentstatus='Open' → only violations that have not yet been resolved
where = "boroid=2 AND class='C' AND currentstatus='Open'"

# Print a status message so the user knows the download is about to begin
print("Downloading open Bronx Class C violations from NYC Open Data (paginating) …")

# Collect each page of results in this list; we will concatenate them afterwards
pages = []

# Start the offset counter at zero; it increases by page_size after each successful page
offset = 0

# Keep fetching pages until a page comes back with fewer rows than page_size (signals last page)
while True:
    # Build the full URL for this page using SoQL $where, $limit, and $offset parameters
    page_url = f"{url}?$where={where}&$limit={page_size}&$offset={offset}"

    # Download this page of results into a DataFrame
    page = pd.read_csv(page_url)

    # Add this page to the collection
    pages.append(page)

    # Report progress so the user can see the download moving forward
    print(f"  Fetched {offset + len(page):,} rows so far …")

    # If the page has fewer rows than the page size, we have reached the last page
    if len(page) < page_size:
        break

    # Advance the offset by one full page to request the next batch
    offset += page_size

# Stack all pages into a single DataFrame
violations = pd.concat(pages, ignore_index=True)

# Print the final row count so the user can confirm the full dataset arrived
print(f"Downloaded {len(violations):,} open Bronx Class C violations.")

# Build a full street address by combining the house number and street name columns
violations["address"] = violations["housenumber"].str.strip() + " " + violations["streetname"].str.strip()

# Convert the violation issue date to a proper datetime type so max() returns the latest date correctly
violations["novissueddate"] = pd.to_datetime(violations["novissueddate"])

# Group the individual violation rows by building, aggregating each group into one summary row
buildings = (
    violations
    # Group by the HPD building identifier plus fields that are the same for every row in a building
    .groupby(["buildingid", "address", "zipcode", "bbl"])
    # Count violations, find the most recent date, and collect all descriptions and dates
    .agg(
        # Count the number of open Class C violations for this building
        violationCount=("violationid", "count"),
        # Capture the date of the most recent violation at this building
        latestDate=("novissueddate", "max"),
        # Gather every violation description into a list for later use in the JSON output
        descriptions=("novdescription", list),
        # Gather every violation date into a parallel list for later use in the JSON output
        dates=("novissueddate", list),
    )
    # Drop the groupby index so buildingid becomes a plain column again
    .reset_index()
)

# Format latestDate as a plain YYYY-MM-DD string so it is readable in CSV and JSON
buildings["latestDate"] = buildings["latestDate"].dt.strftime("%Y-%m-%d")

# Format each violation date in the lists as a plain string as well
buildings["dates"] = buildings["dates"].apply(
    lambda lst: [d.strftime("%Y-%m-%d") for d in lst]
)

# Sort the buildings by violation count in descending order so the worst buildings come first
buildings = buildings.sort_values("violationCount", ascending=False)

# Make the output directory if it does not already exist
Path("output").mkdir(exist_ok=True)

# Save the grouped building data to a CSV file for inspection and for use in the next script
buildings.to_csv("output/bronx_c_violations.csv", index=False)

# Tell the user how many buildings were found and where the file was saved
print(f"Saved {len(buildings):,} buildings to output/bronx_c_violations.csv")
