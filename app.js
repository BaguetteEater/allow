let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let morgan = require('morgan');

let indexRouter = require('./routes/index');

let app = express();

app.use(express.static('public'));
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

app.listen(3000);