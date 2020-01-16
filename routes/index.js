// const path = require("path");
const router = require("express").Router();
// let Schema = require('../client/models/UserSchema.js');
const routes = require('./api');
// const passport = require('passport');

// Import any routes defined in the api folder, and places them behind the '/api/ prefix. 
// All final route orginization takes place here, as different sets of routes are imported and placed behind relavent prefixes.
// Once this is done, the formatted router can be exported. 
router.use('/api', routes);

// TESTING ROUTES
// router.route('/usertest').get(function(req,res){
// 	console.log("testing to see whether or not user is logged in");
// 	if(req.user){
// 		res.json(req.user)
// 	}
// 	else{
// 		res.json('no user signed in')
// 	}
// })

// // CREATE
// router.route('/test').post(function (req, res) {
// 	let test = new Schema;
// 	test.username = "testing";

// 	test.save()
// 		.then(test => {
// 			res.status(200).json(test + " inserted ")
// 		})
// 		.catch(err => {
// 			res.status(400).send();
// 		})
// })

// // READ
// router.route('/get').get(function (req, res) {
// 	Schema.find()
// 		.then(data => res.json(data))
// 		.catch(err => res.status(422).json(err))
// })

// // UPDATE
// router.route('/update').post(function (req, res) {
// 	Schema.updateOne({ username: "testing" }, { bio: "tested" })
// 		.then(data => res.json(data))
// 		.catch(err => res.status(422).json(err))
// })

// // DELETE
// router.route('/delete').post(function (req, res) {
// 	Schema.deleteOne({ username: "testing" })
// 		.then(data => res.json(data))
// 		.catch(err => res.status(422).json(err));
// })

module.exports = router;