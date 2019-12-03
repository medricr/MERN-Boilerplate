const router = require("express").Router();

// Imports all routes from 
const userController = require('../../client/controllers/userController');

router.route('/insert')
	.post(userController.createUser);

router.route('/getall')
	.get(userController.getAllUsers);

module.exports = router;