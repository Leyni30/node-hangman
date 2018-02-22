var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var guessesLeft = 10;

prompt.start(); //starting the prompt
	startGame(guessesLeft);

	function startGame(guessesLeft){
			console.log("Guesses left: " + guessesLeft);
			if(hangmanGame.currentWord.comparingWords() == true){
				console.log("You win!");
				return;
			}
			//if the user is out of gusses!
			if(guessesLeft <= 0){
				console.log("Game Over!");
				return;
			}

		// will display the "_" and the number of spaces in the game.
		console.log(hangmanGame.currentWord.display());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}
		//compares the letter from secretword and the letter typed.
		if(hangmanGame.currentWord.foundIt(result.theGuess) == false){
			guessesLeft --;
		}
		startGame(guessesLeft);

	});
}// end of the funcition and the game! :)