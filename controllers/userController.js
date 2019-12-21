// Bring in the list of models from the models folder
const db = require('../client/models');

// Below are the defined functions for creating a user object and storing it in the database. These are the funcitons that will be // used by the different routes outside this directory, defined here so they can be referenced by the react app
module.exports = {
	
	createUser: function(req,res) {
		console.log(req.body);
		console.log("usercontroller creatuser hit");
		db.User.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	getAllUsers: function(req, res) {
		db.User.find({})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// getCurrentUser - funtion (req, res)
		// check to see if req.user is defined
			// if so
				// store req.user.id in state
			// else
				// redirect back to login page

	getCurrentUser: function(req,res){
		if(req.user){
			res.json(req.user.id)
		}
		else{
			res.json("no user found")
		}
	},

	// saveUserNote - function(req, res)
		// create new note with req.body.title and req.body.content
		// find user in database (findById)
		// save the note as a note schema to the users profile

}