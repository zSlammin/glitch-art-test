var express = require('express');
var fs = require('fs')
var app = express();
var http= require('http');
// var https = require('https');
app.use(express.static('static'))


// var options = {
// 	key: fs.readFileSync('key.pem'),
// 	cert: fs.readFileSync('cert.pem')
// }
http.createServer(app).listen(8000, function(){
	console.log("listening on 8000")
})
// https.createServer(options, app).listen(4430, function(){
// 	console.log("securely listening on 4430")
// });