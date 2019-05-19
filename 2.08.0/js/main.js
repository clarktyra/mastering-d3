/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var data = d3.json("data/buildings.json").then(function(data){
    data.forEach(function(d){
        d.height = +d.height;
    });
    
    console.log(data);

    var canvas = d3.select("#chart-area").append("svg")
        .attr("height", 500)
        .attr("width", 500)
    
    var rectangles = canvas.selectAll("rect")
        .data(data);
    
    rectangles.enter()
        .append("rect")
            .attr("x", function(d, i){
                return (i*50) + 25
            })
            .attr("y", 0)
            .attr("width", 10)
            .attr("height", function(d){
                return d.height
            })
            .attr("fill", "red")

   
})

