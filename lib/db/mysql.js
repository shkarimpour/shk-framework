module.exports = function Mysql(){
	var mysql = require('mysql');
	var config = require('../../config/db/mysql.json');
	var connection = mysql.createConnection(config);
	return connection;
};