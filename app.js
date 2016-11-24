var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var config = require('./config/default');
var path = require('path');
var app = express();
// 首页路由
var indexRouter = require('./routes/index');
// 用户页路由
var userRouter = require('./routes/users');
// 请求接口list
var weatherMapApi = require('./api/api');

// 设置静态资源路径
app.use(express.static(path.join(__dirname, 'fe')));
// 设置项目logo
app.use(favicon(__dirname + '/public/favicon.ico'));

// 设置页面模板路径及解析方式
app.set('views', path.join(__dirname, 'fe/template/weather'));// 设置存放模板文件的目录
// app.set('view engine', 'ejs');// 设置模板引擎为 ejs

// 配置ajax请求体信息
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置相应路由
app.use('/weather', indexRouter);     // 首页
app.use('/weather/users', userRouter); // 用户页

// 接口api配置
app.use('/wt', weatherMapApi);


// 启动服务
var server = app.listen(config.port, function() {
  console.log("应用实例，访问地址为：");
});