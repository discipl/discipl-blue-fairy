var express = require('express');
var app = express();
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//var lawReg = require('discipl-law-reg')
//import Util from '../src/utils/util'
//const util = new Util(lawReg)
//var lifeEventChangeFlint = require('life-event-age.flint')
//util.setupModel(lifeEventAgeFlint)

app.get('/', function (req, res) {
   res.send('{"flintrasa":"1.0"}');
})

// This responds a POST request for the homepage
app.post('/webhook', function (req, res) {

   console.log(req.body);
   // update intent
   // get possible actions
   // take action (if there is unique intent to)
   // update rasa model
   // set response to user
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify({events:[{"event":"followup", "name":"utter_iamabot"}],responses:[{text:"Hello from flint rasa action server"}]}));
})

var server = app.listen(5055, 'localhost', function () {
   var host = server.address().address
   var port = server.address().port

   console.log("FlintRasa actionserver app listening at http://%s:%s", host, port)
})
