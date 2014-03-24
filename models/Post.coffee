module.exports = (di)->
	db = di.db
	DB = di.DB
	
	Post = db.define 'Post',
		title: DB.STRING 2000
		des : DB.TEXT
		content:DB.TEXT
		slug:DB.STRING 2000
		viewType:DB.INTEGER

	Post