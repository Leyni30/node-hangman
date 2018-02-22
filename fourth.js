var Word = require("./word.js");


var Game = function(){
	this.wordOptions = ["cappucino","espresso","latte","turkish"];

	this.randomWord = this.wordOptions[ Math.floor(Math.random() * this.wordOptions.length)];
	this.currentWord = new Word(this.randomWord);
	
}
	var hangMan = new Game();
	// console.log(hangMan.randomWord);

module.exports = Game;
