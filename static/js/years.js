var data=['1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']
var select=d3.selectAll('#selDataset');
data.forEach((i)=>{
        // console.log(i)
        select.append('option').text(i);
})

function makeMap(SelectedYear){
        d3.json('/years_arrival_map').then(function(data){
                console.log(data);
                var selectedYear=d3.select('#selDataset').node().value;               
                var filtered_data = data[selectedYear];
                var countries = filtered_data.map(d=>d.country);
                var arrivals = filtered_data.map(d=>d.arrivals);
                var data = [{
                        type: 'choropleth',
                        locationmode: 'country names',
                        locations: countries,
                        z: arrivals,
                        text: countries,
                        colorscale: [
                                [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                                [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                                [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']],
                        autocolorscale: false,
                        }];
                var layout = {
                        title: 'Travel inbound arrival results by year',
                        geo: {
                                projection: {
                                type: 'mercator'
                                }
                        }
                        };                       
                Plotly.newPlot("map_a", data, layout, {showLink: false});
})
d3.json('/years_gdp_map').then(function(data){
        // console.log(data);
        var selectedYear=d3.select('#selDataset').node().value;               
        var filtered_data = data[selectedYear];
        var countries = filtered_data.map(d=>d.country);
        var gdps = filtered_data.map(d=>d.gdp);
        var data = [{
                type: 'choropleth',
                locationmode: 'country names',
                locations: countries,
                z: gdps,
                text: countries,
                autocolorscale: true
                }];
        var layout = {
                title: "Each country's gdp by year",
                geo: {
                        projection: {
                        type: 'mercator'
                        }
                }
                };                       
        Plotly.newPlot("map", data, layout, {showLink: false});
})
}
function optionChanged(year){
        makeMap(year)
};
