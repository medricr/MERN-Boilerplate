let jwt = 'jsonwebtoken';
let middleware = require('./JWT_middleware');
const db = require('../client/models');

export default  {
	login (req,res) {
		let username = req.body.username;
		let password = req.body.password;

		db.User.findOne({username: username})
			.then((result) => {
				if(err){
					res.json(err)
				}
				else{
					console.log(result);
				}
			})
	}
}