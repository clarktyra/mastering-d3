/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

var data = d3.json("data/revenues.json").then(function(data){
    data.forEach(function(d){
        d.revenue = +d.revenue;
        d.profit = +d.profit;
    })
    
    console.log(data)
})
