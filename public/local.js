Reveal.initialize({
	history: true
});

var socket = io();

socket.on('new master', function (msg) {

	console.log('New master connected!');

	emitSlideChange = function(event){
		// data = {
		// 	v: Reveal.getIndices().v,
		// 	h: Reveal.getIndices().h,
		// 	f: Reveal.getIndices().f || 0
		// };

		var state = Reveal.getState();

		socket.emit("slidechanged" , state);	
		console.log('Master changed the slide. Data: ' + state);
	}

	Reveal.addEventListener('slidechanged', emitSlideChange);
	Reveal.addEventListener('fragmentshown', emitSlideChange);
	Reveal.addEventListener('fragmenthidden', emitSlideChange);
});

socket.on('slidechanged', function (state) {
	console.log('Master changed the slide. Syncing!');
	// Reveal.slide(data.h, data.v, data.f);
	Reveal.setState(state);
});