var socket = io();

var square = document.getElementById("square");

window.addEventListener("keydown", sendKeyPress);

function sendKeyPress(event) {
	console.log("key");
  socket.emit('move it', event.which);  
}

socket.on('move it', function(keyinfo){
    console.log(keyinfo);
	moveItMoveIt(keyinfo);
  });

function moveItMoveIt(keyinfo) {

	var delta = 20;
	var direction = 1;
	
	switch (keyinfo) {    				
		case 38: 		// UP
			direction = -1;
		case 40: 		// DOWN
			square.style.top = ( parseInt(square.style.top, 10) + (direction * delta) ) + "px";
			break;
		case 37: 		// LEFT			
			direction = -1;
		case 39: 		// RIGHT
			square.style.left = ( parseInt(square.style.left, 10) + (direction * delta) ) + "px";
			break;

	}	
}