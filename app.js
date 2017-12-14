//加载依赖库。
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var mongoose = require('./config/mongoose.js');
var db = mongoose();
//加载路由控制
var index = require('./routes/index');//以路径'/'访问时，调用routes下的index.js文件。js后缀省略。
var users = require('./routes/users');//以'/users'访问时，调用routes-users.js。
// var settings = require('./settings');
//创建项目实例
var app = express();


// view engine setup
//定义EJS模版引擎和模版（页面）文件位置。
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// 注意：uncomment after placing your favicon in /public
//导入网站icon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//定义日志和输出级别
app.use(logger('dev'));
//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//定义cookie解析器
app.use(cookieParser());
//定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

//匹配路径和路由
app.use('/', index);
app.use('/users', users);



//catch 404 and forward to error handler
//404错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
//开发环境，500错误处理，错误堆栈处理跟踪
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
    //生产环境，500错误处理。
  res.status(err.status || 500);
  res.render('error');
});

//输出模型app
module.exports = app;
