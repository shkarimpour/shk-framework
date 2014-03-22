module.exports = function App(){
	var express = require('express');
	var path = require('path');
	var favicon = require('static-favicon');
	var logger = require('morgan');
	var cookieParser = require('cookie-parser');
	var bodyParser = require('body-parser');
	var config = require('../config');

	var app = express();
	app.locals.routes = {};

	// view engine setup
	app.set('views', path.join(__dirname+"/../", config.autoload.viewsPath));
	app.set('view engine', 'ejs');

	app.use(favicon());
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());
	app.use(cookieParser());
	app.use(express.session({
		key:"shkarimpour.node.mvc.framework"
		,secret:"shkadmin12345hahaha"
	}));
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(app.router);

	return app;
};