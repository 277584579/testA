var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'view')));
console.log(path.join(__dirname, 'view'))

var server = app.listen(8086, function() {
	console.log("服务器启动成功")
})


//var express = require('express');
//var path = require('path');
//var app = express();
//
//app.use(express.static(path.join(__dirname, 'view')));
//
//console.log('success!')
//app.listen(3000);