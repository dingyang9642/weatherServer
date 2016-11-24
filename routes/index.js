var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
	var templatePath = path.resolve(__dirname, '../fe/template');
    res.sendFile(templatePath + "/weather/index.html");
});

module.exports = router;