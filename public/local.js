// RevealJS options
Reveal.initialize({
	history: true
});

// Connect to SocketIO server
var socket = io();


// codecast-test1:
var codecast1 = document.getElementById("codecast1");
var codecast2 = document.getElementById("codecast2");


// Set event listeners only if granted slidemaster privileges
socket.on('new master', function (msg) {
	console.log('New slidemaster connected and confirmed.');

	function emitSlideChange(event) {
		var state = Reveal.getState();
		socket.emit("slidechanged" , state);
		console.log('Emitting! This slidemaster changed the slide.');
	}

	Reveal.addEventListener('slidechanged', emitSlideChange);
	Reveal.addEventListener('fragmentshown', emitSlideChange);
	Reveal.addEventListener('fragmenthidden', emitSlideChange);

	// codecast-test1:
	function codeCast1() {
		console.log('\n\nCODECAST:\n' + codecast1.innerText);
		socket.emit('codecast1', codecast1.innerText);
	}
	function codeCast2() {
		console.log('\n\nCODECAST2:\n' + codecast2.innerText);
		socket.emit('codecast2', codecast2.innerText);
	}

	codecast1.addEventListener("keyup", codeCast1);
	codecast2.addEventListener("keyup", codeCast2);
});

// If "slidechanged" event received from server, update view
socket.on('slidechanged', function (state) {
	console.log('Syncing! A slidemaster changed the slide.');
	Reveal.setState(state);
});

// codecast-test1:
socket.on('codecast1', function(msg){
	console.log('\n\nCODECAST:\n' + msg);
	codecast1.innerText = msg;
	hljs.highlightBlock(codecast1);
});
socket.on('codecast2', function(msg){
	console.log('\n\nCODECAST2:\n' + msg);
	codecast2.innerText = msg;
	hljs.highlightBlock(codecast2);
});
