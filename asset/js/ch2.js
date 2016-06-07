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
		context.strokeStyle = "black";
		context.lineWidth = 10;
		context.lineCap = "square";
		context.beginPath();
		context.moveTo(20, 0);
		context.lineTo(100, 0);
		context.stroke();
		context.closePath();
	}
}