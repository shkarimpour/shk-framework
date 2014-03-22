module.exports = function(di){
	var paths = require('../config/autoload.json');
	autoload(paths.controllersPath,di,initController);
	autoload(paths.modelsPath,di,initModel);
	return di;
};

var autoload = function(path,di,inti){
	var fs = require('fs');
	var files = fs.readdirSync(path);
	var name = "";
	for(i=0;i<files.length;i++){
		name = files[i].split('.')[0];
		init(di,require("../"+path+"/"+files[i]),name);
	}
}

var initController = function(di,controller,name){
	controller.di = di;
	controller.models = di.models;
	di.controllers[name] = controller;
};

var initModel = function(di,model,name){
	model.di = di;
	di.models[name] = model;
};