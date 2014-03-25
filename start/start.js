#!/usr/bin/env node

//require coffee script compiler
require('coffee-script/register');

//load shk framework
var shk = require('../lib');

//make a shk framework instance
var di = shk();

/// catch 404 and forwarding to error handler
di.app.use(function(req, res, next) {
    res.render('site/error/404');
});

//load debug file
var debug = require(di.config.autoload.debugFilePath);

//set debug
debug(di);

//run app
var debug = require('debug')('my-application');

var server = di.app.listen(di.app.get('port'), function() {
  debug('SHK server listening on port ' + server.address().port);
  console.log('SHK server listening on port ' + server.address().port);
});

di.server = server;