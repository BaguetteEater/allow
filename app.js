let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let morgan = require('morgan');

let indexRouter = require('./routes/index');

let app = express();

app.use(express.static('public'));
app.use("/public/images", express.static(__dirname + '/public/images'));
app.use("/public/javascripts", express.static(__dirname + '/public/javascripts'));
app.use("/public/stylesheets", express.static(__dirname + '/public/stylesheets'));
app.use(express.static('views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());
app.use(morgan('combined'));

app.use('/', indexRouter);

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

const port = 3000;
console.info('Starting Allow on port ' + port + '...');
app.listen(port);