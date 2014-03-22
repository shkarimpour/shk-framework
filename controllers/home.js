
var home = {

	index: function(req,res){
		res.render('site/index');
	}

	,recentPosts:function(req,res){
		home.models.post.all(function(err,posts){
			if(!err) res.render('site/posts',{posts:posts});
		});
	}
};

module.exports = home;