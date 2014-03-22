module.exports = function DB(Sequelize,config){
	var dbconf = null;

	switch(config.db){
		case "mysql": 
			var dbconf = config.mysql;
			dialect = "mysql";
			break;
		default: 
			var dbconf = config.mysql;
			break;
	}

	sequelize = new Sequelize(dbconf.database,dbconf.user,dbconf.password,{
		dialect:dialect
		,port:dbconf.port
	});

	sequelize
	  .authenticate()
	  .complete(function(err) {
	    if (!!err) {
	      console.log('Unable to connect to the database:', err)
	    } else {
	      console.log('Connection has been established successfully.')
	    }
	  })

	return sequelize;
};