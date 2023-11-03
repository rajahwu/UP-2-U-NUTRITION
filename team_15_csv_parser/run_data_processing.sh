#!/bin/bash

# Step 1: Sanitize and move CSV files
./sanitize_and_move_csv.sh

# Step 2: Generate JSON files from CSV
python parse_sheet.py

# Step 3: Combine data to data.json.
python data_gen.py
