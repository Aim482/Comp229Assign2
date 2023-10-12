var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var body = require('body-parser');


const mongoose = require('mongoose');
const mongouri = "mongodb+srv://shermarpinder:Awes0m32345%2F@cluster0.iz7bpxb.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=AtlasApp"
main().catch(err => console.log(err));
//mongodb+srv://shermarpinder:<Awes0m32345%2F>@cluster0.iz7bpxb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp
async function main() {
  //await mongoose.connect('mongodb://127.0.0.1:27017/test');
  await mongoose.connect(mongouri
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

var indexRouter = require('./routes/index');
var products = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(body.urlencoded({
  extended: true
}));
app.use(body.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1', products);

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
