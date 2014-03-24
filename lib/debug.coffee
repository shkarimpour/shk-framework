module.exports = (di)->
  if di.config.app.debug
    #error handlers
    # development error handler
    # will print stacktrace
    if di.app.get('env') is 'development'
        di.app.use (err, req, res, next) ->
            res.render 'error/index', 
                message: err.message
                error: err

    # production error handler
    # no stacktraces leaked to user
    di.app.use (err, req, res, next) ->
        res.render 'error/index', 
            message: err.message
            error: {}
  else 
    #when debug is off
    di.app.use (err, req, res, next)-> res.render('error/404')

  true