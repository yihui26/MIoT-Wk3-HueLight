// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8585;

var querystring = require('querystring');
var http = require('http');

var data = '{"on":true}';

var options = {
    host: '192.168.86.111',
    port: 80,
    path: '/api/tIqAjsywGJsHAzEBc5NUqaSxuAEjY79VK4dWFnx-/lights/5/state',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log("body: " + chunk);
    });
});

req.write(data);
req.end();

// routes will go here
// GET method route
app.get('/', function (req, res) {
  res.send('Hello World')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})


// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
