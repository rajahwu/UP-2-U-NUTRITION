import csv
import json
import os

# Ensure the 'data' folder exists
data_folder = 'data'
if not os.path.exists(data_folder):
    os.makedirs(data_folder)

# Function to convert CSV to JSON with transformation
def csv_to_json_with_transformation(csv_filename, json_filename):
    data = []

    with open(csv_filename, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data.append(row)

    # Get the base filename (without the extension)
    base_filename = os.path.splitext(json_filename)[0]

    # Create a list for the output data
    output_data = {base_filename: []}

    for entry in data:
        filtered_entry = {k.lower().replace(" ", "-"): v if v else None for k, v in entry.items()}  # Transform keys and set missing values to None
        filtered_entry['name'] = filtered_entry.pop('add-ons', base_filename)  # Set "name" and remove "add-ons," use the filename if "add-ons" is missing
        output_data[base_filename].append(filtered_entry)

    with open(os.path.join(data_folder, json_filename), 'w') as json_file:
        json.dump(output_data, json_file, indent=4)

# Convert each CSV file to JSON with transformation
for filename in os.listdir('csv'):
    if filename.endswith('.csv'):
        csv_filename = os.path.join('csv', filename)
        json_filename = filename.replace('.csv', '.json')
        csv_to_json_with_transformation(csv_filename, json_filename)
        print(f'{csv_filename} has been converted and saved to data/{json_filename}.')
