var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// data dependencies
let mongoose = require('mongoose');
let config = require('./config/globals');

mongoose.connect(config.db);

var index = require('./server/controllers/index');
var users = require('./server/controllers/users');

var app = express();

// view engine setup - change path to use the angular client folder
app.set('views', path.join(__dirname, 'client/app/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/app/public')));

app.use('/', index);
app.use('/users', users);

module.exports = app;
