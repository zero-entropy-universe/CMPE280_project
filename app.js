var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var firebase = require('firebase');

// setup firebase
var config = {
  apiKey: "AIzaSyBKfaN-XN9UcZJ2SJ_ti1YgZoOyFI6XDfE",
  authDomain: "cmpe280-7f761.firebaseapp.com",
  databaseURL: "https://cmpe280-7f761.firebaseio.com",
  projectId: "cmpe280-7f761",
  storageBucket: "cmpe280-7f761.appspot.com",
  messagingSenderId: "440824295674"
};

firebase.initializeApp(config);
firebase.auth().signInWithEmailAndPassword("test001@gmail.com", "test001").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode, errorMessage);
});

console.log("firebase");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views/')); // set view path

// import routers
var index = require('./routes/index')();
<<<<<<< Updated upstream
var demo = require('./routes/demo')();
=======
var demo = require('./routes/demo')(firebase);
var test = require('./routes/test')(firebase);
>>>>>>> Stashed changes
var addRestaurant = require('./routes/addRestaurant')(firebase);
var newRes =require('./routes/newRes')(firebase);
var restDetail = require('./routes/restDetail')(firebase);
var searchResult = require('./routes/searchResult')(firebase);

// Route url to routers
app.use('/', index);
app.use('/demo', demo);
app.use('/addRestaurant', addRestaurant);
app.use('/newRes',newRes);
// app.get('/restDetail/:id', restDetail);
app.use('/restDetail', restDetail);
app.get('/restDetail/:id', restDetail);
app.use('/restDetail',restDetail);
app.use('/searchResult', searchResult);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
