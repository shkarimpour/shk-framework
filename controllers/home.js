module.exports = function(di){

	models = di.models;

	var home = {

		index: function(req,res){
			res.render('site/index');
		}

		,recentPosts:function(req,res){
			models.Post
					.findAll({limit:2})
					.success(function(posts){
						res.render('site/posts',{posts:posts});
					});
		}
	};

	return home;

}