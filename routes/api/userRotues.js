const router = require("express").Router();
const passport = require('passport');
// Imports all routes from 
const userController = require('./../../controllers/userController');
const authController = require('../../controllers/authController');

router.route('/insert')
	.post(userController.createUser);

router.route('/getall')
	.get(userController.getAllUsers);

router.route('/register')
	.post(authController.registerUser);

router.route('/login')
	.post(authController.loginUser);

// router.post('/login',
// 	passport.authenticate('local'),
// 	(req, res) => {
// 		const user = JSON.parse(JSON.stringify(req.user)) // hack
// 		const cleanUser = Object.assign({}, user)
// 		if (cleanUser) {
// 			delete cleanUser.password
// 		}
// 		res.json({ user: cleanUser })
// 	}
// )




module.exports = router;