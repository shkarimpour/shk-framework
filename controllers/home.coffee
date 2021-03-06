module.exports = (di)->

	models = di.models

	home = 

		index: (req,res)->
			res.render 'site/home/index' 

		recentPosts:(req,res)->
			models.Post
					.all()
					.success (posts)->
						res.render('site/post/index',{posts:posts})

		form:(req,res)->
			res.render 'site/post/form'

		savePost:(req,res)->
			title = req.param 'title'
			des = di.e req.param 'des'
			content = di.xss req.param 'content'

			models.Post
						.create
							title:title
							content:content
							des:des
						.success ()->
							res.redirect di.routes.recentPosts

	home