//add countries option to the dropdown menu
d3.json('/countries').then(function(data){
    // console.log(data);
    var select=d3.selectAll('#selDataset');
    data.forEach((i)=>{
        // console.log(i)
        select.append('option').text(i);
})
})
//pick the country and make the plot
function makePlot(countrySelected){
//make line graph with arrivals data
    d3.json('/arrivals').then(function (data) {
        var selectedCountry = d3.select("#selDataset").node().value; 
        // console.log(selectedCountry)
        var countryData
        data.forEach(function(d){
            if (selectedCountry == Object.keys(d)){
                countryData = d[selectedCountry]
            }
        })
        var countryPick = countryData['Years']
        console.log(Object.keys(countryPick))
        var trace1 = {
            x: Object.keys(countryPick),
            y: Object.values(countryPick),
            type: 'scatter'
        }
        Plotly.newPlot('arrival-line', [trace1])
    }
    )
    //make line graph with gdp data
    d3.json('/gdp').then(function (data) {
        var selectedCountry = d3.select("#selDataset").node().value; 
        data.forEach(function(d){
            if (selectedCountry == Object.keys(d)){
                countryData = d[selectedCountry]
            }
        })
        var countryPick = countryData['Years']
        console.log(Object.keys(countryPick))
        var trace2 = {
            x: Object.keys(countryPick),
            y: Object.values(countryPick),
            type: 'scatter'
        }
        Plotly.newPlot('gdp-line', [trace2])
    })
};
// Submit Button handler
// function optionChanged(newCountry) {
//     // Select the input value from the form
//     makePlot(newCountry);
// }
  
//A map with all the coordinates
d3.json('/latlngs').then(function(data) {
		var data = [
			{
				type: "scattermapbox",
				text: data.country,
				lon: data.location[0],
				lat: data.location[1],
				marker: { color: "fuchsia", size: 4 }
			}
		];

		var layout = {
			dragmode: "zoom",
			mapbox: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 3 },
			margin: { r: 0, t: 0, b: 0, l: 0 }
		};

		// Plotly.newPlot("map", data, layout);
	});