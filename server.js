var express = require('express');
var bodyParser = require('body-parser-with-msgpack');

var app = express();

/*
	Enable mime-types: application/json, form-data and message pack!
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.msgpack());


app.post('/data', function (req, res) {
  res.status(200).json({
  	message: 'success',
  	data: req.body
  });
});


app.listen(8080, function () {
  // Server started!
  console.log('Server started listening on 8080!');
  console.log('Submit your request to /data (POST)');
});