var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/store', function(req, res, next){
    console.log('Hej, jestem pośrednikiem przy żadaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/store', function(req, res) {
	res.send('To jest sklep');
});

app.listen(3000);

app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleź tego, czego żądasz!');
});