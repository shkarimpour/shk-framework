module.exports = function Public(di){
	var _c = di.controllers;

	//home routes
	di.routes.index = "/";
	di.app.get(di.routes.index,_c.home.index);

	di.routes.recentPosts = "/recent";
	di.app.get(di.routes.recentPosts,_c.home.recentPosts);

	return this;
};