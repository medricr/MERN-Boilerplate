// Bring in the list of models from the models folder
const db = require('../models');

// Below are the defined functions for creating a user object and storing it in the database. These are the funcitons that will be // used by the different routes outside this directory, defined here so they can be referenced by the react app
module.exports = {
	
	createUser: function(req,res) {
		console.log(req.body);
		db.User.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
}