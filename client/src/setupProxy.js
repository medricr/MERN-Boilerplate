const proxy = require('http-proxy-middleware');

module.exports = function(app){
	app.use(
		proxy([
			'/api/user/register',
			'/api/user/login',
			'/api/user/logout',
			'/api/user/profile',
			'/api/user/notes'
			], {target: "http://localhost:3001"})
	)
}