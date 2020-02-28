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
            name: 'International Arrivals',
            type: 'scatter'
        }

        var layout = {
            title: {
              text:'International Arrivals',
              font: {
                family: 'Courier New, monospace',
                size: 24
              },
              xref: 'paper'
            //   x: 0.05,
            },
            xaxis: {
              title: {
                text: 'Year',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              },
            },
            yaxis: {
              title: {
                text: '# of Arrivals',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              }
            }
          };
        Plotly.newPlot('arrival-line', [trace1], layout)
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
        var layout = {
            title: {
              text:'Gross Domestic Product',
              font: {
                family: 'Courier New, monospace',
                size: 24
              },
              xref: 'paper'
            //   x: 0.05,
            },
            xaxis: {
              title: {
                text: 'Year',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              },
            },
            yaxis: {
              title: {
                text: 'GDP by Year',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              }
            }
          };
        Plotly.newPlot('gdp-line', [trace2], layout)
    })
    d3.json('/arrivals').then(function (data) {
        var selectedCountry = d3.select("#selDataset").node().value; 
        data.forEach(function(d){
            if (selectedCountry == Object.keys(d)){
                countryData = d[selectedCountry]
            }
        })
        var countryPick = countryData['location']
        var data1 = [
			{
				type: "scattermapbox",
				text: selectedCountry,
				lon: [countryData['location']['long']],
				lat: [countryData['location']['lat']],
				marker: { color: "fuchsia", size: 15 }
			}
        ];
        var layout = {
			dragmode: "zoom",
			mapbox: { style: "open-street-map", zoom:1.5},
			margin: { r: 0, t: 0, b: 0, l: 0 }
        };
        console.log(data1)
        Plotly.newPlot('map', data1, layout)
    })
};
//Submit Button handler
function optionChanged(newCountry) {
    // Select the input value from the form
    makePlot(newCountry);
    // Initialize Animate on Scroll
    AOS.init({
      duration: 1200,
    })
}
  