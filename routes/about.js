//route about
var express = require('express');

var app = express();
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/views/about.html');//code html de Florine
});
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);
