require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const layouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const passport = require('passport');
const session = require("express-session");
const mongoose = require('mongoose');
const config = require('./config');
const upload = require('../config/multer');
const MongoStore = require("connect-mongo")(session);

module.exports = function(app){

  const dbUrl = process.env.MONGO_URL;
  console.time('db');
  mongoose.connect(dbUrl)
    .then( () => {
      console.log(`Connected to ${dbUrl}`);
      console.timeEnd('db');
    })
    .catch( e => console.log(e));

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    // default value for title local
    app.locals.title = 'Atlas of landscapes';

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static('public'));
    app.use(layouts);

    app.use(session({
      secret: 'angular auth passport secret',
      resave: true,
      saveUninitialized: true,
      store: new MongoStore({mongooseConnection: mongoose.connection}),
      cookie : { httpOnly: true, maxAge: 2419200000 }
    }));

    app.use(passport.initialize());
    app.use(passport.session());

};
