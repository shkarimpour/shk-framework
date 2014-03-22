module.exports = function(di){
	var db = di.db;
	var DB = di.DB;
	
	var Post = db.define('Post',{
		title:DB.STRING(2000)
		,des : DB.TEXT
		,content:DB.TEXT
		,slug:DB.STRING(2000)
		,viewType:DB.INTEGER
	});

	return Post;
};