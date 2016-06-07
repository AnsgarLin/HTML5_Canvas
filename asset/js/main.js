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
 	return Modernize.canvas;
}

function canvasApp() {

	if (!canvasSupport()) {
		return;
	}

	var theCanvas = document.getElementById("canvasOne");
	var context = theCanvas.getContext("2d");

	function drawScreen() {
		context.fillStyle = "#ddd";
		context.fillRect(0, 0, 500, 300);

		context.fillStyle = "#000000";
		context.font = "20px _sans";
		context.textBaseline = "top";
		context.fillText("Hello world!", 195, 80);

		var helloWorldImage = new Image();
		helloWorldImage.src = "asset/images/logo.png";
		helloWorldImage.onload = function() {
			context.drawImage(helloWorldImage, 160, 130);
		}

		context.strokeStyle = "#000000";
		context.strokeRect(5, 5, 490, 290)
	}

	drawScreen();
}

function canvasSupport() {
	return Modernizr.canvas;
}