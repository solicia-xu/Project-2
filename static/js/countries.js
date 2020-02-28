d3.json('/country_list').then(function(data){
    // console.log(data);
    var select=d3.selectAll('#selDataset');
    data.forEach((i)=>{
        // console.log(i)
        select.append('option').text(i);
})
})
function makePlot(countrySelected){
d3.json('/arrivals').then(function (data) {
    var selectedCountry = d3.select("#selDataset").node().value;
    // console.log(selectedCountry)
    var countryData
    data.forEach(function (d) {
        if (selectedCountry == Object.keys(d)) {
            countryData = d[selectedCountry]
        }
    })
    var countryPick = countryData['Years']
    console.log(Object.keys(countryPick))
    var myConfig = {
        "type": "line",
        "title":{
            text: "Arrival Results by Year "
        },
        "series": [
           {"values": Object.values(countryPick) }
        ],
        "scale-x":{
            "values":Object.keys(countryPick),
            "label":{text: "Years"},
        },
        "scale-y":{
            "label":{text: "# of Arrivals"},
            short: true,
            'thousands-separator': ", "
        },
        "plot": {
           "animation": {
              "effect": "ANIMATION_SLIDE_LEFT",
              "sequence": 1, 
              "speed": 4000
           }
        }
     };
    //  console.log(myConfig)
     zingchart.render({
        id: 'arrival-line',
        data: myConfig
     });
})
    //make line graph with gdp data
    d3.json('/gdp').then(function (data) {
        var selectedCountry = d3.select("#selDataset").node().value; 
        data.forEach(function(d){
            if (selectedCountry == Object.keys(d)){
                countryData = d[selectedCountry]
            }
        })
        var countryPick = countryData['Years']
        // console.log(Object.keys(countryPick))
        var myConfig2 = {
            "type": "line",
            "title":{
                text: "GDP by Year (in $)"
            },
            "series": [
               {"values": Object.values(countryPick) }
            ],
            "scale-x":{
                "values":Object.keys(countryPick),
                "label":{text: "Years"},
            },
            "scale-y":{
                "label":{text: "GDP of Country (in $)"},
                short: true,
                'thousands-separator': ", "
            },
            "plot": {
               "animation": {
                  "effect": "ANIMATION_SLIDE_BOTTOM",
                  "sequence": 1, 
                  "speed": 4000
               }
            }
         };
        //  console.log(myConfig)
         zingchart.render({
            id: 'gdp-line',
            data: myConfig2
         });
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
			mapbox: { style: "open-street-map"},
			margin: { r: 0, t: 0, b: 0, l: 0 }
        };
        console.log(data1)
        Plotly.newPlot('map', data1, layout)
    })
}

function optionChanged(newCountry) {
    // Select the input value from the form
    makePlot(newCountry);
    // Initialize Animate on Scroll
    AOS.init({
        duration: 1200,
      })
}

