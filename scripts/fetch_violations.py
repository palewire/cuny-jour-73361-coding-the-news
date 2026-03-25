"""
Download the full NYC HPD Housing Maintenance Code Violations dataset,
filter it to the Bronx and Class C (immediately hazardous) violations,
and group the results by building with a total violation count.

Output: output/bronx_c_violations.csv

Source: NYC Open Data – Housing Maintenance Code Violations
https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5
"""

# Import the pandas library for reading and analyzing data
import pandas as pd

# Import the pathlib library to create output directories
from pathlib import Path

# Print a status message so the user knows the script has started
print("Downloading the full HPD violations dataset from NYC Open Data …")

# Set the base URL for the NYC Open Data Socrata API endpoint for HPD violations
url = "https://data.cityofnewyork.us/resource/wvxf-dwi5.csv"

# Set a row limit high enough to retrieve the entire dataset (currently ~6 million rows)
limit = 6_000_000

# Download the full dataset into a DataFrame; the $limit parameter overrides Socrata's 1,000-row default
df = pd.read_csv(f"{url}?$limit={limit}")

# Print the shape of the raw download so the user can confirm how many rows arrived
print(f"Downloaded {len(df):,} rows and {len(df.columns)} columns.")

# Print the column names so the user can inspect the raw data structure
print("Columns:", df.columns.tolist())

# Filter the dataset to rows where the borough is the Bronx (boroid == 2)
bronx = df[df["boroid"] == 2]

# Print how many rows remain after the borough filter
print(f"Bronx rows: {len(bronx):,}")

# Filter to Class C violations only (the most severe, immediately hazardous category)
class_c = bronx[bronx["class"] == "C"]

# Print how many rows remain after the class filter
print(f"Bronx Class C rows: {len(class_c):,}")

# Filter to violations whose current status is "Open" so we only count active problems
open_violations = class_c[class_c["currentstatus"] == "Open"]

# Print how many open violations remain
print(f"Open Bronx Class C rows: {len(open_violations):,}")

# Make a working copy to avoid a pandas SettingWithCopyWarning when adding columns
violations = open_violations.copy()

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
