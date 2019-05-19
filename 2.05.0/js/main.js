/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/



var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var circle  = svg.append("circle")
    .attr("cx", 20)
    .attr("cy", 20)
    .attr("r", 5)
    .attr("fill", "blue");


var rect = svg.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", "red");

var ellipse = svg.append("ellipse")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("rx", 10)
    .attr("ry", 20)
    .attr("fill", "grey");

var line = svg.append("line")
    .attr("x1", 400)
    .attr("y1", 0)
    .attr("x2", 200)
    .attr("y2", 200)
    .attr("stroke-width", 2)
    .attr("stroke", "black");