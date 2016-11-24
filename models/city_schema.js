var mongoose = require('mongoose');
var config = require('../config/default');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb, function(err) {
    if(err) {
        console.log('connect database failed!!');
    } else {
        console.log('connect database success ^_^');
    }
}); //连接mongo数据库

// 统计数据库模式声明
var citysSchema = new mongoose.Schema({
    id: String,
    cityEn: String,
    cityZh: String,
    countryCode: String,
    countryEn: String,
    countryZh: String,
    provinceEn: String,
    provinceZh: String,
    leaderEn: String,
    leaderZh: String,
    lat: String,
    lon: String,
    meta: {
        createAt: {
             type: Date,
             default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

citysSchema.pre('save', function(next) {
    if(this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
});

citysSchema.statics = {
	fetch: function(cb) {
        return this
        .find({})
        .sort('meta.updateAt')
        .exec(cb);
	},
	findById: function() {
        return this
        .findOne({_id: id})
        .exec(cb);
	}
};

module.exports = citysSchema;