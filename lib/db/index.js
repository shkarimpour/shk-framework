module.exports = function DB(){
	var config = require('../../config/db');
	switch(config.db){
		case "mysql": 
			var db = require('./mysql.js');
			return new db();
		default: 
			var db = require('./mysql.js');
			return new db();
	}
};