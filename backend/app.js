var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var fs = require('fs');
var https = require('https');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var introInfoRouter = require('./routes/introInfo');
var eduInfoRouter = require('./routes/eduInfo');
var workInfoRouter = require('./routes/workInfo');
var projectInfoRouter = require('./routes/projectInfo');

// https cert
var privateKey = fs.readFileSync('/etc/nginx/cert/mysite.key', 'utf8');
var certificate = fs.readFileSync('/etc/nginx/cert/mysite.pem', 'utf8');
var credentials = { key: privateKey, cert: certificate };

const corsOptions = {
  origin: ['https://www.bevisshen.com', 'http://localhost:3000', 'http://localhost:3001'],
  methods: "GET,PUT,PATCH,POST,DELETE",
  credentials: true
}

var app = express();
var httpsServer = https.createServer(credentials, app);
var httpsServer = https.createServer(app);
httpsServer.listen(3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', 3000);
//app.listen(app.get('port'));
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/introInfo', introInfoRouter);
app.use('/eduInfo', eduInfoRouter);
app.use('/workInfo', workInfoRouter);
app.use('/projectInfo', projectInfoRouter);

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
