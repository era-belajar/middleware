var express = require('express');
var app = express();

var log = function (req, res, next) {
	console.log('request ini tercatat');
	next();
};

app.use(log);
app.use(function (req, res, next) {
	console.log('Tipe Request: ', req.method);
	next();
});

app.get('/', function(req, res) {
	res.send('Ini adalah response dari server');
});

app.listen(3000, function(){
	console.log('Terhubung dengan port 3000');
});

