const router = require("express").Router();

const userController = require('../../client/controllers/userController');

router.route('/user')
	.post(userController.createUser);

module.exports = router;