const db = require('../client/models');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
		usernameField: 'username'
	},
	function(username, password, done) {
		console.log("searching database for name.....")
		db.User.findOne({'username': username}, (err, matchedUser) => {
			if(err){
				return done(err);
			}
			if(!matchedUser){
				return done(null, false, {message: 'username not found'});
			}
			if(!matchedUser.checkPassword(password)){
				return done(null, false, {message: 'incorrect password'});
			}
			return done(null, matchedUser);
		})
	}
)

module.exports = strategy;