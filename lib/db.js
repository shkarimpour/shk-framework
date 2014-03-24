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

	return sequelize;
};