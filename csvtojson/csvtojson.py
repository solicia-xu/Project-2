import csv,json
csvFilePath='travel_data.csv'
jsonFilePath='cleaneddata.json'
json_list = []
with open(csvFilePath) as csvFile:
    csvReader=csv.DictReader(csvFile)
    for csvRow in csvReader:
       json_list.append(csvRow)
with open(jsonFilePath, 'w') as jsonFile:
    jsonFile.write(json.dumps(json_list))

