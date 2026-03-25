"""
Merge the grouped violations data from 03_filter_violations.py with the PLUTO
latitude/longitude data from 02_download_pluto.py, then serialize the result
to the JSON schema used by the Week 9 SvelteKit app.

The two datasets are joined on the BBL (Borough-Block-Lot) identifier, which
is a unique 10-digit code that NYC uses to identify every tax lot.

Inputs:  output/bronx_c_violations.csv
         output/pluto_raw.csv
Output:  output/bronx_buildings.json  (ready to drop into the week-9 Svelte project)
"""

# Import the pandas library for reading and manipulating data
import pandas as pd

# Import json so we can write the final output as pretty-printed JSON
import json

# Import ast.literal_eval to safely parse list columns stored as strings in the CSV
from ast import literal_eval

# Import the pathlib library so we can create the output directory if needed
from pathlib import Path

# ------------------------------------------------------------------
# Step 1 – Load the violations data produced by 03_filter_violations.py
# ------------------------------------------------------------------

# Print a status message so the user knows which step is running
print("Loading grouped violations data …")

# Read the CSV file that 03_filter_violations.py wrote into a DataFrame
violations = pd.read_csv("output/bronx_c_violations.csv")

# Convert the BBL column to a plain string so it matches the format in PLUTO
violations["bbl"] = violations["bbl"].astype(str).str.strip()

# Print how many buildings are in the violations file
print(f"  {len(violations):,} buildings loaded from output/bronx_c_violations.csv")

# ------------------------------------------------------------------
# Step 2 – Load the PLUTO data produced by 02_download_pluto.py
# ------------------------------------------------------------------

# Print a status message so the user knows which step is running
print("Loading PLUTO data …")

# Read the CSV file that 02_download_pluto.py wrote into a DataFrame
pluto = pd.read_csv("output/pluto_raw.csv")

# Convert the PLUTO BBL column to a plain string so it matches the violations BBL format
pluto["bbl"] = pluto["bbl"].astype(str).str.strip()

# Drop any duplicate BBL rows in PLUTO so the merge stays one-to-one
pluto = pluto.drop_duplicates(subset="bbl")

# Print how many PLUTO records are available
print(f"  {len(pluto):,} PLUTO records loaded from output/pluto_raw.csv")

# ------------------------------------------------------------------
# Step 3 – Merge latitude and longitude onto the violations data
# ------------------------------------------------------------------

# Print a status message for the merge step
print("Merging latitude and longitude …")

# Left-join the violations data with PLUTO on the BBL column
# A left join keeps every building even if PLUTO has no matching record
merged = violations.merge(pluto, on="bbl", how="left")

# Rename the PLUTO latitude column to the shorter name used in the Svelte project
merged = merged.rename(columns={"latitude": "lat", "longitude": "lng"})

# Print how many buildings ended up with coordinates after the merge
with_coords = merged["lat"].notna().sum()
print(f"  {with_coords:,} of {len(merged):,} buildings matched a PLUTO record.")

# ------------------------------------------------------------------
# Step 4 – Convert to the JSON format used by the week-9 Svelte app
# ------------------------------------------------------------------

# Print a status message for the conversion step
print("Converting to JSON …")

# Parse the descriptions and dates columns back from their string representation
# (pandas stores lists as strings in CSV; literal_eval safely reconstructs them)
merged["descriptions"] = merged["descriptions"].apply(literal_eval)
merged["dates"] = merged["dates"].apply(literal_eval)

# Build a list of plain Python dicts, one per building, matching the bronx-buildings.json schema
records = []

# Iterate over every row in the merged DataFrame
for _, row in merged.iterrows():
    # Pair each violation description with its corresponding date in a nested list
    violations_list = [
        {"description": desc, "date": date}
        for desc, date in zip(row["descriptions"], row["dates"])
    ]

    # Build the dict for this building using the field names from the week-9 JSON schema
    record = {
        # HPD building identifier (used as the URL slug on detail pages)
        "id": str(int(row["buildingid"])),
        # Full street address in upper-case, matching the source data style
        "address": row["address"],
        # Five-digit ZIP code
        "zip": str(row["zipcode"]),
        # Total number of open Class C violations
        "violationCount": int(row["violationCount"]),
        # Date of the most recently issued violation (YYYY-MM-DD)
        "latestDate": row["latestDate"],
        # Latitude from PLUTO (None if the building had no BBL match)
        "lat": round(float(row["lat"]), 4) if pd.notna(row["lat"]) else None,
        # Longitude from PLUTO (None if the building had no BBL match)
        "lng": round(float(row["lng"]), 4) if pd.notna(row["lng"]) else None,
        # Nested list of individual violation records with description and date
        "violations": violations_list,
    }

    # Append the completed building dict to the output list
    records.append(record)

# ------------------------------------------------------------------
# Step 5 – Save the output
# ------------------------------------------------------------------

# Make the output directory if it does not already exist
Path("output").mkdir(exist_ok=True)

# Open the output file for writing
with open("output/bronx_buildings.json", "w") as f:
    # Write the list of building records as formatted JSON (indent=2 keeps it readable)
    json.dump(records, f, indent=2)

# Tell the user where the finished file landed
print(f"Saved {len(records):,} buildings to output/bronx_buildings.json")
print("Copy this file to src/lib/data/bronx-buildings.json in your Svelte project.")
