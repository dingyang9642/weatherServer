var mongoose = require('mongoose');
var CitySchema = require('./city_schema');
var City = mongoose.model("city", CitySchema);

module.exports = City;