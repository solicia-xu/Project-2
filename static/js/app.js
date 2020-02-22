//add countries option to the dropdown menu
d3.json('/countries').then(function(data){
    // console.log(data);
    var select=d3.selectAll('#selDataset');
    Object.entries(data).forEach(([i,v])=>{
        select.append('option').text(v);
})
})
//make line graph with arrivals data
d3.json('/arrivals').then(function(data){
    var countryPick=data.map(row=>row.countryname);
    var trace1={
        x: data.map(row=>row.index),
        y: [data.'1995',data.'1996'],
        type: 'scatter'
    }
    Plotly.newPlot('arrival-line',trace1)
})
//make line graph with gdp data
d3.json('/arrivals').then(function(data){
    var countryPick=data.map(row=>row.countryname);
    var trace1={
        x: data.map(row=>row.index),
        y: [data.1995,data.1996],
        type: 'scatter'
    }
    Plotly.newPlot('gdp-line',trace1)
})
//A map with all the coordinates
Plotly.d3.json('/latlngs').then(function(data) {
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

		Plotly.newPlot("map", data, layout);
	});