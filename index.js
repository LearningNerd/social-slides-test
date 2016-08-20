var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 8000;

// global var -- super quick, hacked-together solution for now!
var slidemaster = false;

app.use(express.static('public'));

app.get('/test', function(req,res){
  res.send('session variable = ' + slidemaster);
});

app.get('/login', function (req, res) {
    if (!slidemaster) {
      slidemaster = true;
      console.log('set slidemaster = true.');
    }
  	res.redirect('/');
});



io.on('connection', function(socket){

	console.log('A user connected!');

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

    if (slidemaster) {
      slidemaster = false;
  		socket.emit('new master', socket.id);
  		console.log('Slide master connected. id: ' + socket.id);

  		socket.on("slidechanged", function (msg) {
  			console.log('Slide master changed slide! Now broadcasting to users.')
  	        socket.broadcast.emit("slidechanged", msg);
  	    });

  		socket.on('disconnect', function(msg){

  		    console.log('Slide master disconnected!');

  		});
  	}

	socket.on('disconnect', function(msg){
	    console.log('A user disconnected.');
	});

});


http.listen(port, function(){
  console.log('listening on ' + port);
});
