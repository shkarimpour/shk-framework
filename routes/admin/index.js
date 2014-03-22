module.exports = function Admin(shk){

	//home route
	shk.app.get('/admin',function(req,res){
		res.send('admin');
	});

	return this;
};