'use strict';

var http = require('http'),
    fs = require('fs');    //NodeJS提供的文件系统接口


/**
 * [通过文件接口读取本地文件]
 * @param  {[type]} err       [description]
 * @param  {[type]} html){} [文件内容]
 * @return {[type]}           [description]
 */
fs.readFile('index.html', function(err, html){
	if(err){
		throw err;
	}
	http.createServer(function (request, response){
		//响应HTTP头部
		//HTTP状态值：200：OK
		// 内容类型：text/palin
		response.writeHead(200,{'Content-Type':'text/html'});

		// 发送响应数据“Hello World!”
		response.end(html);
	}).listen(8888);
});


console.log('Server running at http://127.0.0.1:8888');