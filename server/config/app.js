/* 
File name: app.js
Student’s Name: Mahfuzur Rahman
StudentID : 301336576
Date : Feb 7 2023 
*/
  
// require() is a built-in function to include external modules that exist in separate files. 
// require() statement basically reads a JavaScript file
let createError = require('http-errors');


// What Is Express JS?     
// Express is a node js Web Application Framework that provides broad features for building web and 
// mobile applications.  It's a layer built on the top of the Node js that helps manage servers and routes.
// Why Express JS?
// Express was created to make APIs and web applications with ease,
// It saves a lot of coding time almost by half and still makes web and 

let express = require('express');

// Node.js path module is used for handling and transforming file paths. 
let path = require('path');

// to use cookies with Express, we will require the cookie-parser. 
// cookie-parser is a middleware which parses cookies attached to the client request object. 
let cookieParser = require('cookie-parser');

let logger = require('morgan');

//---
//modules for authentication
let session = require('express-session');

let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;

let flash = require('connect-flash');

//--
//database setup
let mongoose = require("mongoose");
mongoose.set('strictQuery', true);

let DB = require("./db");

//--
//point mongoose to DB URI
mongoose.connect(DB.URI,{useNewUrlParser: true, useUnifiedTopology: true });

let mongoDB = mongoose.connection;
mongoDB.on('error',console.error.bind(console,'Connection Error:'));
mongoDB.once('open',()=>{

  console.log('Connected to MongODB...');
});

//-


let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');

//---
let contactsRouter = require('../routes/contacts');
//-

// var app = express(); => Calls the express function "express()" and 
// puts new Express application inside the app variable (to start a new Express application). 
// It's something like you are creating an object of a class.
let app = express();


// view engine setup
// The app.set() function assigns or sets a setting name to value. 
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');


// app.use middleware is applied to all requests, either for specified paths or for all paths:
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname,'../../node_modules')));


//---
//setup express session
app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}));

//initialize flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport user configuration

//create a User Model instance
let userModel = require('../models/user');
let User = userModel.User;

//Implement a User Authentication Strategy
passport.use(User.createStrategy());
//serialize and deserialize the User info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//-


app.use('/', indexRouter);
app.use('/users', usersRouter);

//---
app.use('/contacts-list', contactsRouter);
//-

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
