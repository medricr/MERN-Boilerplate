const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const Schema = new schema({

	username: {type: String},
	password: {type: String}, 
	bio: {type: String}
});

Schema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

Schema.pre('save', function (next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.password = this.hashPassword(this.password)
		next()
	}
});

const User = mongoose.model("User", Schema);

module.exports = User;