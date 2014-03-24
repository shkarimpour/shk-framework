//require coffee script compiler
require('coffee-script/register');

//shk modules
var App = require('./lib/app');
var DB = require('./lib/db');
var Routing = require('./lib/routing');
var debug = require("./lib/debug");
var config = require('./config');

//node modules
var Sequelize = require('sequelize');
var _ = require('underscore');
var sanitizer = require("sanitizer");
var path = require('path');

//define app and db
var app = new App();
var db = DB(Sequelize,config.db);

//create dependency injector
var di = {
    app:app
    ,db:db
    ,DB:Sequelize
    ,_:_
    ,routes:app.locals.routes
    ,filters:{}
    ,controllers:{}
    ,models:{}
    ,config:config
    ,sanitizer:sanitizer
    ,xss:sanitizer.sanitize
    ,e:sanitizer.escape
    ,viewsPath:function(name){
      return path.join(__dirname,di.config.autoload.viewsPath,name);
    }
};

//set some views add ons
di.app.locals.viewsPath = di.viewsPath;

//assign routes
Routing(di);


//connect to db and syn changes
db
  .authenticate()
  .complete(function(err) {
      if (!!err) {
        console.log('Unable to connect to the database:', err)
      } else {
        console.log('Connection has been established successfully.')

        //sync db
        db
          .sync()
          .complete(function(err) {
             if (!!err) {
               console.log('An error occurred while create the table:', err)
             } else {
               console.log('It worked!')
             }
          });
      }
  });

//set port of server
app.set('port',config.app.port);

//run autoload
var autoload = require('./lib/autoload')(di);

//set di for views
app.locals.di = di;
app.locals._ = _;

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    res.render('site/error/404');
});

//set debug
debug(di);

module.exports = app;
