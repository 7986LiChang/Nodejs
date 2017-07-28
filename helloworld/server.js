'use strict';

var http = require('http');

http.createServer(function (request, response){
	//响应HTTP头部
	//HTTP状态值：200：OK
	// 内容类型：text/palin
	response.writeHead(200,{'Content-Type':'text/html'});

	// 发送响应数据“Hello World!”
	response.end('<h1>My first Nodejs Server</h1>');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888');