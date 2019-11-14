const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = "3000";
const testRoutes = express.Router();

let Schema = require('./client/models/UserSchema.js');

app.use(cors());
app.use(bodyParser.json());
app.use(testRoutes);

// Establish connection to database
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

// Check connection to db
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Spin up server
app.listen(PORT, function(){
	console.log("Server is running on port " + PORT);
});

testRoutes.route('/test').post(function(req,res){
	let test = new Schema;
	test.username = "test";

	test.save()
	  .then(test => {
		res.status(200).json()
	  })
	  .catch(err => {
		  res.status(400).send();
	  })
})