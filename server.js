const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
// const testRoutes = express.Router();
const routes = require('./routes');

// Reference to database
let Schema = require('./client/models/UserSchema.js');


app.use(cors());
app.use(bodyParser.json());

app.use(routes);

// Establish connection to database
// Anything following localhost/ can be changed to fit whatever naming convention fits the project best 
mongoose.connect('mongodb://localhost/TEST', { useNewUrlParser: true });
const connection = mongoose.connection;

// Check connection to db
connection.once('open', function () {
	console.log("MongoDB database connection established successfully");
})

// Spin up server
app.listen(PORT, function () {
	console.log("Server is running on port " + PORT);
});



// // CRUD ROUTES - WILL MOVE TO SEPERATE FILE / DIRECTORY WHEN COMPLETE
// // CREATE
// testRoutes.route('/test').post(function (req, res) {
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
// testRoutes.route('/get').get(function (req, res) {
// 	Schema.find()
// 		.then(data => res.json(data))
// 		.catch(err => res.status(422).json(err))
// })

// // UPDATE
// testRoutes.route('/update').post(function(req,res) {
// 	Schema.updateOne({username: "testing"}, {bio: "tested"})
// 		.then(data => res.json(data))
// 		.catch(err => res.status(422).json(err))
// })

// // DELETE
// testRoutes.route('/delete').post(function(req,res) {
// 	Schema.deleteOne({username: "testing"})
// 		.then(data => res.json(data))
// 		.catch(err => res.status(422).json(err));
// })