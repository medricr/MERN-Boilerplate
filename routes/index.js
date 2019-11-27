const path = require("path");
const router = require("express").Router();
let Schema = require('../client/models/UserSchema.js');
const routes = require('./api');
// Routes are exported and integerated into server.js
// TODO
// Seperate routes into controller and API files for use in react app

router.use('/api', routes);

// CREATE
router.route('/test').post(function (req, res) {
	let test = new Schema;
	test.username = "testing";

	test.save()
		.then(test => {
			res.status(200).json(test + " inserted ")
		})
		.catch(err => {
			res.status(400).send();
		})
})

// READ
router.route('/get').get(function (req, res) {
	Schema.find()
		.then(data => res.json(data))
		.catch(err => res.status(422).json(err))
})

// UPDATE
router.route('/update').post(function (req, res) {
	Schema.updateOne({ username: "testing" }, { bio: "tested" })
		.then(data => res.json(data))
		.catch(err => res.status(422).json(err))
})

// DELETE
router.route('/delete').post(function (req, res) {
	Schema.deleteOne({ username: "testing" })
		.then(data => res.json(data))
		.catch(err => res.status(422).json(err));
})

module.exports = router;