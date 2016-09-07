// Dependencies
var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8000;

// Serve static files
app.use(express.static('public'));

// SocketIO stuff:
io.on('connection', function(socket){
	console.log('\nA user connected!');

	// Allow slidemaster to broadcast to other clients
	socket.on("slidechanged", function (msg) {
		//console.log('Slide master changed slide! Now broadcasting to users.')
		socket.broadcast.emit("slidechanged", msg);
	});

	socket.on('disconnect', function(msg){
		console.log('A user disconnected.');
	});

}); // end of io.on('connection' ...

// Server, listen up!
http.listen(port, function(){
	console.log('Listening on port ' + port);
});
