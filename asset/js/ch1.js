window.addEventListener("load", eventWindowLoaded, false);

var Debugger = function() {};
Debugger.log = function (massage) {
	try {
		console.log(massage);
	} catch(exception) {
		return;
	}
}

function eventWindowLoaded() {
	canvasApp();
}

function canvasSupport() {
 	return Modernizr.canvas;
}

function canvasApp() {
	var guesses = 0;
	var message = "Guess The Letter From a (lower) to z (higher)";
	var letters = [
		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j",

		"k", "l", "m", "n", "o", "p", "q", "r", "s", "t",

		"u", "v", "w", "x", "y", "z"
	];
	var today = new Date();
	var letterToGuess = "";
	var higherOrLower = "";
	var lettersGuessed;
	var gameOver = false;

	if (!canvasSupport()) {
		return;
	}

	var theCanvas = document.getElementById("canvasOne");
	var context = theCanvas.getContext("2d");

	initGame();

	function initGame() {
		var letterIndex = Math.floor(Math.random() * letters.length);
		letterToGuess = letters[letterIndex];
		guesses = 0;
		lettersGuessed = [];
		gameOver = false;
		window.addEventListener("keyup", eventKeyPressed, true);
		var formElement = document.getElementById("createImageData");
		formElement.addEventListener('click', createImageDataPressed, false);
		drawScreen();
	}

	function eventKeyPressed(e) {
		if (!gameOver) {
			var letterPressed = String.fromCharCode(e.keyCode);
			letterPressed = letterPressed.toLowerCase();

			guesses++;
			lettersGuessed.push(letterPressed);

			if (letterPressed == letterToGuess) {
				gameOver = true;
			} else {
				letterIndex = letters.indexOf(letterToGuess);
				guessIndex = letters.indexOf(letterPressed);

				if (guessIndex < 0) {
					higherOrLower = "This is not a letter.";
				} else if (guessIndex > letterIndex){
					higherOrLower = "Lower";
				} else {
					higherOrLower = "Higher";
				}
			}
			drawScreen();
		}
	}

	function drawScreen() {
		context.fillStyle = "#ffffaa";
		context.fillRect(0, 0, 500, 300);

		context.strokeStyle = "#000000";
		context.strokeRect(5, 5, 490, 290)

		context.textBaseline = "top";
		context.fillStyle = "#000000";
		context.font = "10px _sans";
		context.fillText(today, 150, 10);

		context.fillStyle = "#FF0000";
		context.font = "14px _sans";
		context.fillText(message, 125, 30);

		context.fillStyle = "#109910";
		context.font = "16px _sans";
		context.fillText('Guesses: ' + guesses, 215, 50);

		context.fillStyle = "#000000";
		context.font = "16px _sans";
		context.fillText("Higher or Lower: " + higherOrLower, 150, 125);

		context.fillStyle = "#FF0000";
		context.font = "16px _sans";
		context.fillText("Letters Guessed: " + lettersGuessed.toString(), 10, 260);

		if (gameOver) {
			context.fillStyle = "#FF0000";
			context.font = "40px _sans";
			context.fillText("You got it!", 150, 180);
		}
	}

	function createImageDataPressed() {
		window.open(theCanvas.toDataURL(), "canvasImage", "left=0, top=0, width=" + theCanvas.width + ", height=" + theCanvas.height + ", toobar=0, resized=0");
	}

}