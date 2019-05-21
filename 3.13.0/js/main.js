/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

var margin = { left:100, right: 10, top:10, bottom:150 };

var width = 600 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom

var g = d3.select("#chart-area")
    .append("svg")
        .attr("height", 400)
        .attr("width", 600)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

g.append("text")
    .attr("class", "y axis-label")
    .attr("x", - (height/2))
    .attr("y", -60)
    .attr("font-size", "30px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Revenue ($) ");

g.append("text")
    .attr("class", "x axis-label")
    .attr("x", width / 2)
    .attr("y", height + 100)
    .attr("font-size", "30px")
    .attr("text-anchor", "middle")
    .text("Starbreak's Monthly Revenue");

d3.json("data/revenues.json").then(function(data){
    data.forEach(function(d){
        d.revenue = +d.revenue;
        d.profit = +d.profit;
    })
    
    console.log(data)

    var x = d3.scaleBand()
        .domain(data.map(function(d){ return d.month; }))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){ return d.revenue; })])
        .range([height, 0])

    var xAxisCall = d3.axisBottom(x);
    
    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxisCall)
        .selectAll("text")
            .attr("y", "10")
            .attr("x", "0")
            .attr("text-anchor", "end")
            .attr("font-size", "12px")
            .attr("transform", "rotate(-30)");

    var yAxisCall = d3.axisLeft(y)
        .ticks(7)
        .tickFormat(function(d){
            return d + "$";
        });

    g.append("g")
        .attr("class", "y-axis")
        .call(yAxisCall)
        .selectAll("text")
            .attr("font-size", "12px")
        ;   

    var rects = g.selectAll("rect")
        .data(data)


    rects.enter()
        .append("rect")
            .attr("y", function(d){ return y(d.revenue); })
            .attr("x", function(d){ return x(d.month); })
            .attr("width", x.bandwidth)
            .attr("height", function(d){ return height - y(d.revenue); })
            .attr("fill", "green");
        

                

    
})

//test test test