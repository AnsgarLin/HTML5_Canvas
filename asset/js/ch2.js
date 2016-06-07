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
	if (!canvasSupport()) {
		return;
	} else {
		var theCanvas = document.getElementById("canvasOne");
		var context = theCanvas.getContext("2d");
	}

	drawScreen();

	function drawScreen() {
		context.fillStyle = "#000000";
		context.strokeStyle = "#ff00ff";
		context.lineWidth = 2;
		context.fillRect(10, 10, 40, 40);
		context.strokeRect(0, 0, 60, 60);
		context.clearRect(20, 20, 20, 20);
	}
}