module.exports = (di)->

	auth:(req,res,next)->
		if req.session.user
			next()
		res.redirect di.routes['home']
		
	guest:(req,res,next)->
		if not req.session.user
			next()
		res.redirect di.routes['home']