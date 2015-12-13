var express = require('express');
var app = express();
var path = require('path');

app.get('/*', function(req, res) {
    var file = params[0] || 'index.html';
    res.sendFile(path, __dirname + file);
});