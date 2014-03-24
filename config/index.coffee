db = require './db.json'
app = require './app.json'
autoload = require './autoload.json'

config =
	app:app
	db:db
	autoload:autoload

module.exports = config