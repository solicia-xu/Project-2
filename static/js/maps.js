    d3.json('/years_arrival_map').then(function(data){ 
        var frames=[]
        var slider_steps=[]
        var n=22;
        var num=1995;
        for (var i=0; i<=n; i++){
            var z=data[num].map(d=>d.arrivals)
            var locations=data[num].map(d=>d.country)
            frames[i] = {data: [{z: z, locations: locations, text: locations}], name: num}
            slider_steps.push ({
                label: num.toString(),
                method: "animate",
                args: [[num], {
                    mode: "immediate",
                    transition: {duration: 300},
                    frame: {duration: 300}
                  }
                ]
              })
            num=num+1
        }
        console.log(frames[0])
        console.log(z)
        var data = [{
            type: 'choropleth',
            locationmode: 'country names',
            locations: frames[0].data[0].locations,
            z: frames[0].data[0].z,
            text: frames[0].data[0].locations,
            zauto: true,
            colorscale: [
                [0, 'rgb(148,200,216)'], [0.2, 'rgb(137,207,240)'],
                [0.4, 'rgb(137,207,240)'], [0.6, 'rgb(101,147,245)'],
                [0.8, 'rgb(15,82,186)'], [1, 'rgb(16,52,166)']
              ],
            autocolorscale: false
      }];
      var layout = {
        title: 'Inbound Travel Arrival Result<br>1995 - 2007',
        geo:{
           scope: 'country names',
           countrycolor: 'rgb(255, 255, 255)',
           showland: true,
           landcolor: 'rgb(217, 217, 217)',
           showlakes: true,
           lakecolor: 'rgb(255, 255, 255)',
           subunitcolor: 'rgb(255, 255, 255)',
           lonaxis: {},
           lataxis: {}
        },
        updatemenus: [{
          x: 0.1,
          y: 0,
          yanchor: "top",
          xanchor: "right",
          showactive: false,
          direction: "left",
          type: "buttons",
          pad: {"t": 87, "r": 10},
          buttons: [{
            method: "animate",
            args: [null, {
              fromcurrent: true,
              transition: {
                duration: 200,
              },
              frame: {
                duration: 500
              }
            }],
            label: "Play"
          }, {
            method: "animate",
            args: [
              [null],
              {
                mode: "immediate",
                transition: {
                  duration: 0
                },
                frame: {
                  duration: 0
                }
              }
            ],
            label: "Pause"
          }]
        }],
        sliders: [{
          active: 0,
          steps: slider_steps,
          x: 0.1,
          len: 0.9,
          xanchor: "left",
          y: 0,
          yanchor: "top",
          pad: {t: 50, b: 10},
          currentvalue: {
            visible: true,
            prefix: "Year:",
            xanchor: "right",
            font: {
              size: 20,
              color: "#666"
            }
          },
          transition: {
            duration: 300,
            easing: "cubic-in-out"
          }
        }]
    };
    Plotly.newPlot('map', data, layout)
    .then(function() {
        Plotly.addFrames('map', frames);
      });
    })

d3.json('/years_gdp_map').then(function(data){        
    var frames=[]
    var slider_steps=[]
    var n=22;
    var num=1995;
    for (var i=0; i<=n; i++){
        var z=data[num].map(d=>d.gdp)
        var locations=data[num].map(d=>d.country)
        frames[i] = {data: [{z: z, locations: locations, text: locations}], name: num}
        slider_steps.push ({
            label: num.toString(),
            method: "animate",
            args: [[num], {
                mode: "immediate",
                transition: {duration: 300},
                frame: {duration: 300}
              }
            ]
          })
        num=num+1
    }
    console.log(frames[0])
    console.log(z)
    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: frames[0].data[0].locations,
        z: frames[0].data[0].z,
        text: frames[0].data[0].locations,
        zauto: true,
        colorscale: [
            [0, 'rgb(208,240,192)'], [0.2, 'rgb(152,251,152)'],
            [0.4, 'rgb(80,220,100)'], [0.6, 'rgb(80,200,120)'],
            [0.8, 'rgb(199,234,70)'], [1, 'rgb(112,130,56)']
          ],
        autocolorscale: false
  }];
  var layout = {
    title: 'GDP data over time<br>1995 - 2007',
    geo:{
       scope: 'country names',
       countrycolor: 'rgb(255, 255, 255)',
       showland: true,
       landcolor: 'rgb(217, 217, 217)',
       showlakes: true,
       lakecolor: 'rgb(255, 255, 255)',
       subunitcolor: 'rgb(255, 255, 255)',
       lonaxis: {},
       lataxis: {}
    },
    updatemenus: [{
      x: 0.1,
      y: 0,
      yanchor: "top",
      xanchor: "right",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 87, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0
            }
          }
        ],
        label: "Pause"
      }]
    }],
    sliders: [{
      active: 0,
      steps: slider_steps,
      x: 0.1,
      len: 0.9,
      xanchor: "left",
      y: 0,
      yanchor: "top",
      pad: {t: 50, b: 10},
      currentvalue: {
        visible: true,
        prefix: "Year:",
        xanchor: "right",
        font: {
          size: 20,
          color: "#666"
        }
      },
      transition: {
        duration: 300,
        easing: "cubic-in-out"
      }
    }],
    autosize: true,
};
Plotly.newPlot('map_a', data, layout)
.then(function() {
    Plotly.addFrames('map_a', frames);
  });
})