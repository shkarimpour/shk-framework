var db = require('./db.json');
var app = require('./app.json');
var autoload = require('./autoload.json');

var config = {
	app:app
	,db:db
	,autoload:autoload
}

module.exports = config;