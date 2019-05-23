//route accueil Allow
var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/accueilAllow.html');//code html de Florine
});

//gestion error 404 le fameux
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);
