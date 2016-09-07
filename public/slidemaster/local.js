// RevealJS options
Reveal.initialize({
	history: true
});

// Connect to SocketIO server
var socket = io();

// Set event listeners for slidemaster privileges
function emitSlideChange(event) {
	var state = Reveal.getState();
	socket.emit("slidechanged" , state);
	console.log('Emitting! This slidemaster changed the slide.');
}

Reveal.addEventListener('slidechanged', emitSlideChange);
Reveal.addEventListener('fragmentshown', emitSlideChange);
Reveal.addEventListener('fragmenthidden', emitSlideChange);


// If "slidechanged" event received from server, update view
socket.on('slidechanged', function (state) {
	//console.log('Syncing! A slidemaster changed the slide.');
	Reveal.setState(state);
});
