var http = require('http');

var server = http.createServer(function(request,response) {
	console.log('Got request');
	response.write('Hi!');
	response.end();

});

server.listen(3000);