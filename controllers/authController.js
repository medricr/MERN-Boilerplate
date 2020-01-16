const passport = require('passport');
const db = require('../client/models');

module.exports =  {

	registerUser: function(req,res) {
		// Store submitted username and password
		let submitted_username = req.body.username;
		let submitted_password = req.body.password;
		// Check the database to see if there is already a user tied to the submitted username 
		db.User.findOne({username: submitted_username}, (err, matchedUser)=> {
			// Return an error message if the username is already taken
			if(matchedUser){
				return res.json({
					error: `username ${submitted_username} already exists`
				})
			}
			// Else, store the information in a new user object
			const newUser = new db.User({
				'username': submitted_username,
				'password': submitted_password
			})
			// Use the save method in the user schema to store the username in the database with a hashed version of their password
			newUser.save((err, savedUser)=> {
				if(err){
					return res.json(err)
				}
				return res.json(savedUser);
			})
		})
	},

	loginUser: function(req,res,next){
		passport.authenticate('local', function (err, user, info) {
			if (err) { return next(err); }
			if (!user) { return res.redirect('/login'); }
			req.logIn(user, function (err) {
				console.log('loggin in user')
				console.log(user)
				if (err) { return next(err); }
				return res.json(user);
			});
		})(req, res, next);
	},

	logoutUser: function(req,res){
		req.logout();
		res.redirect('/');
	}
}	