var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

http.listen(8000, function(){
  console.log('listening on *:8000');
});

var numSockets = 0;

io.on('connection', function(socket){
	
	numSockets++;
	console.log('A user connected! Number of users is now: ' + numSockets);

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

  