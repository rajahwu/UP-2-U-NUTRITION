#!/bin/bash

# Define color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Create the 'csv' and 'data' directories if they don't exist
mkdir -p csv data

# Move CSV files from the current directory to the 'csv' directory and sanitize the file names
for file in *.csv; do
  # Extract the base name of the file (without extension)
  base_name=$(basename "$file" .csv)
  
  # Remove the "U2U_MENU - " prefix and convert to lowercase
  new_name=$(echo "$base_name" | sed 's/U2U_MENU - //;s/[^A-Za-z0-9._-]/_/g' | tr '[:upper:]' '[:lower:]')
  
  # Move the file to 'csv' with the sanitized name
  mv "$file" "csv/$new_name.csv" 2> /dev/null
  if [ $? -eq 0 ]; then
    echo -e "Moved ${GREEN}$file${NC} to ${YELLOW}csv/$new_name.csv${NC}"
  else
    echo -e "${RED}Failed to move $file${NC}"
  fi
done

# Sanitize and reformat CSV files already in the 'csv' directory
for file in csv/*.csv; do
  # Extract the base name of the file (without extension)
  base_name=$(basename "$file" .csv)
  
  # Remove the "U2U_MENU - " prefix and convert to lowercase
  new_name=$(echo "$base_name" | sed 's/U2U_MENU - //;s/[^A-Za-z0-9._-]/_/g' | tr '[:upper:]' '[:lower:]')
  
  # Rename the file with the sanitized name
  mv "$file" "csv/$new_name.csv" 2> /dev/null
  if [ $? -eq 0 ]; then
    echo -e "Renamed ${GREEN}$file${NC} to ${YELLOW}csv/$new_name.csv${NC}"
  else
    echo -e "${RED}Failed to rename $file${NC}"
  fi
done

# Move JSON files to the 'data' directory
mv *.json data/ 2> /dev/null
if [ $? -eq 0 ]; then
  echo -e "Moved ${GREEN}JSON files${NC} to ${YELLOW}data/${NC}"
else
  echo -e "${RED}Failed to move JSON files${NC}"
fi
