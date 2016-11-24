var express = require('express');
var app = express();
var City = require('../models/city_model');

/**
 * 获取用户信息接口
 * @param  { string }     设置相应接口地址
 * @param  { function }   设置接口请求响应回调处理函数
 * @return { json }       返回相应json数据
 */
app.get('/getUsrInfo', function(req, res) {
    res.json({
        "name": 'dingyang',
        "age": '27'
    });
});

module.exports = app;