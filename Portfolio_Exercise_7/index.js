console.log("Hello world");
/*
const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err,fd)=>{
	if(err) {
		console.log("There was an error: " + err);
	} else{
		console.log("The file says \n" + fd);
	}

});
*/

//Quotes
const Quote = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote

//Superhero names
const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();
//=> 'Spider-Ham'

//Supervillian names
const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

supervillains.random();
//=> 'Mud Pack'

console.log(supervillains.random() + " is coming!!! Oh no! " + superheroes.random() + " please help us!!" );