var App = require('./lib/app.js');
var DB = require('./lib/db');
var Routes = require('./routes');

var app = new App();
var db = DB;

var di = {
    app:app
    ,db:db
    ,routes:app.locals.routes
    ,controllers:{}
    ,models:{}
};

//run autoload
var autoload = require('./lib/autoload.js')(di);

//set di for views
app.locals.di = di;

var routes = new Routes(di);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    res.render('error/404');
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error/index', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error/index', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
