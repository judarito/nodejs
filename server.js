'use strict';
const http = require('http');
const server= http.createServer(function(req,res){
	res.writeHead(200,{'content-type': 'text/plain'});
	res.end('Hola mundo');
});

server.listen(8001)