var express = require('express');
var app = express();
var http = require('http').Server(app);

// tells node where to find static files
app.use(express.static(__dirname + '/public'));

// Serve up index.html file.
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

// Run on a local port
http.listen(process.env.PORT || 3000,function(){
	console.log('listening on *:3000')
});