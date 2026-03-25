# Data preparation scripts

These Python scripts download and process the NYC housing violation and property data needed to build the Bronx Housing Violations database explorer in Week 9.

## What the scripts produce

Running the four scripts in order produces `output/bronx_buildings.json` — a file containing every Bronx building that has open Class C (immediately hazardous) HPD violations, grouped by building with violation counts and geographic coordinates. This file is the data source for the Week 9 SvelteKit project.

The scripts are split into two download scripts and two processing scripts so that you can re-run the analysis without re-downloading the raw data.

## Prerequisites

You need Python 3 and the pandas library installed. If you are using a virtual environment:

```bash
pip install pandas
```

## Running the scripts

Run the scripts from the `scripts/` directory, in order:

```bash
cd scripts

# Step 1 — paginated download of open Bronx Class C violations → output/violations_raw.csv
python 01_download_violations.py

# Step 2 — paginated download of PLUTO (bbl, latitude, longitude) → output/pluto_raw.csv
python 02_download_pluto.py

# Step 3 — group violations by building → output/bronx_c_violations.csv
python 03_filter_violations.py

# Step 4 — merge PLUTO coordinates and serialize to JSON → output/bronx_buildings.json
python 04_merge_pluto.py
```

Steps 1 and 2 only need to be run once. You can re-run steps 3 and 4 as many times as you like without downloading the raw data again.

All scripts write their output to the `scripts/output/` directory.

## Data sources

| Dataset | Source |
|---|---|
| HPD Housing Maintenance Code Violations | [NYC Open Data](https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5) |
| Primary Land Use Tax Lot Output (MapPLUTO) | [NYC Open Data](https://data.cityofnewyork.us/City-Government/Primary-Land-Use-Tax-Lot-Output-PLUTO-/64uk-42ks) |

## Using the output in your Svelte project

Copy the finished file into your Week 9 project:

```bash
cp output/bronx_buildings.json ../path/to/your-project/src/lib/data/bronx-buildings.json
```
