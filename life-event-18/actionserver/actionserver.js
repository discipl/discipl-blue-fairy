var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   res.send('{"flintrasa":"1.0"}');
})

// This responds a POST request for the homepage
app.post('/webhook', function (req, res) {
   console.log("Got a POST request");
   res.send('Hello POST');
})

var server = app.listen(5055, 'localhost', function () {
   var host = server.address().address
   var port = server.address().port

   console.log("FlintRasa actionserver app listening at http://%s:%s", host, port)
})
