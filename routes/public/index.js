module.exports = function Public(di){

	//home routes
	di.routes.index = "/";
	di.app.get(di.routes.index,di.controllers.home.index);

	di.routes.recentPosts = "/recent";
	di.app.get(di.routes.recentPosts,di.controllers.home.recentPosts);

	return this;
};