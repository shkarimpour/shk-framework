var post = {
	all:function(next){
		var di = post.di;
		var db = di.db();
		db.connect();
		var sql = "select * from posts";
		db.query(sql,function(err,posts){
			db.end();
			if(err) return next(err,null)
			next(false,posts);
		});
	}
}

module.exports = post;