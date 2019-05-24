/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 2 - Gapminder Clone
*/

d3.json("data/data.json").then(function (data) {
	data.forEach(x =>
		x.countries = x.countries.filter(thing => (thing.income !== null) && (thing.life_exp !== null))
	);
	console.log(data)

})