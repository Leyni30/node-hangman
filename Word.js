var Letter = require("./Letter.js");

var Word = function(palabra){
	//Variables with an empty array.
	this.palabra = palabra;
	this.guessedWord = [];
	this.win = false;
	this.usedLetters = [];

	//Method to grab the letter in the word.
	this.grabLetters = function(){
		for(var i = 0; i <this.palabra.length; i++){
			var theNewLetter = new Letter(this.palabra[i]);
			this.guessedWord.push(theNewLetter);

		}
	}
	this.grabLetters();

this.foundIt = function(guessLetter){
		for(var i = 0; i <this.usedLetters.length; i++){
			if(guessLetter == this.usedLetters[i]){
				return true;
			}
		}
		console.log(guessLetter);
		var added = false;

		this.usedLetters.push(guessLetter);
		//console.log("size:",this.guessedWord.length);
		for(var i = 0; i <this.guessedWord.length;i++){
			//console.log("i:", i);
			//console.log("guessedWord letter: ", this.guessedWord[i].theLetters)
			if(this.guessedWord[i].letterin(guessLetter)){
				this.guessedWord[i].showsLetter = true;
				added = true;
			} 
		}
		return added;

	}

this.comparingWords = function(){
 		for(var i = 0; i < this.palabra.length; i++){
 			// console.log("secret letter:", this.palabras.charAt(i));
 			// console.log("letters:",this.guessedWord[i].current);
 			if(this.palabra.charAt(i) != this.guessedWord[i].current){
 				return false;
 			}

 		}
 				return true;
 	}

this.display = function(){
		var emptyString = "";
			
		for(var i = 0; i <this.guessedWord.length; i++){
			emptyString += this.guessedWord[i].current + " ";
		}
		return emptyString;
	}
	// this.display();
} //end of Word function


module.exports = Word;

