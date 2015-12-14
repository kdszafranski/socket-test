/*  SERVER  */
var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')({path: '/socket'});

// mount body parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Current directory is root
app.use(express.static(__dirname + '/public/assets/views'));
app.use(express.static(__dirname + '/public/scripts'));
app.use(express.static(__dirname + '/public/vendors'));
app.use(express.static(__dirname + '/socket'));

// socket.io listen
io.on('connection', function(socket){
    console.log('a user connected');
});

// set node to listen on a port
app.set('port', process.env.PORT || 5000);
app.listen(app.get("port"), function() {
    console.log("Server is ready: " + app.get("port"));
});