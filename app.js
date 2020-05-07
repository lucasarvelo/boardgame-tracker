require('dotenv').config(); //load enviroment variables from .env file
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db/db.js');
const errorHandler = require('./middleware/errorHandler.js');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const hotRouter = require('./routes/hot');
const app = express();

//Connect to mongo database
db({
  url: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hot', hotRouter);

app.use(errorHandler);
module.exports = app;
