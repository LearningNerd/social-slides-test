// var express = require("express");
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.use(express.static('public'));

// http.listen(8000, function(){
//   console.log('Listening on port 8000');
// });

// io.on('connection', function(socket){

// 	console.log('A client connected!');

// 	socket.on('move it', function(data){
// 	    console.log(data);
// 	    io.emit('move it', data);
// 	});

// });

var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8000;

app.use(express.static('public'));

http.listen(port, function(){
  console.log('listening on ' + port);
});

var numSockets = 0;

io.on('connection', function(socket){
	
	numSockets++;
	console.log('A user connected! Number of users is now: ' + numSockets);


	// CHAT-DEMO
	socket.on('chat', function(data){
	    console.log('CHAT: name: '+ data.name + ', message: ' + data.message);
	    io.emit('chat', data);
	});


	// TEST1
	socket.on('move it', function(data){
	    console.log(data);
	    io.emit('move it', data);
	});

	if (numSockets === 1) {
		
		socket.emit('new master', socket.id);
		console.log('Elected new master with id: ' + socket.id);

		socket.on("slidechanged", function (msg) {
			console.log('Master changed slide! Now broadcasting to users.')
	        socket.broadcast.emit("slidechanged", msg);
	    });

		socket.on('disconnect', function(msg){		   
			
		    console.log('Master disconnected! Now disconnecting all users.');		    
		    
		    var socks = io.sockets.sockets;
		    for (var id in socks) {
			  if (socks.hasOwnProperty(id)) {
			    socks[id].disconnect(true);
			    console.log('Removing user with id: ' + id );
			  }
			}	    	
		});
	}

	socket.on('disconnect', function(msg){
	    numSockets--;
	    console.log('A user disconnected. Number of users is now: ' + numSockets);	    
	});

});