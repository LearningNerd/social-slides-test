var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var port = process.env.PORT || 8000;

app.use(express.static('public'));


app.get('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)

  	res.redirect('/');

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

	if (numSockets === 1) {

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



});


// app.use(passport.initialize());

// passport.use(new passportlocal.Strategy(function(username,password,done){
// 	//database would go here!
// 	if (username === 'Liz') {
// 		done(null, {id:username, name:username});
// 	} else {
// 		done(null, null);
// 	}
// }));

// passport.serializeUser(function(user,done){
// 	done(user.id);
// });

// passport.deserializeUser(function(id,done){
// 	// would query the databse here!
// 	done({id: id, name: id});
// });

app.get('/', function(req,res){
	// if (req.isAuthenticated()) {
	// 	res.send('hi liz!');
	// } else {
	// 	res.send('you are not authenticated!!!!');
	// }


	// res.render('index', {
	// 	isAuthenticated: req.isAuthenticated(),
	// 	user: req.user
	// });
});

// app.post('/login', passport.authenticate('local'), function(req,res){
// 	res.redirect('/');
// });

http.listen(port, function(){
  console.log('listening on ' + port);
});
