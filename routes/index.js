/* GET home page. */
module.exports = function Routes(app){

  var Admin = require('./admin');
  var Public = require('./public');

  var p = new Public(app);
  var admin = new Admin(app);

  return this;

};
