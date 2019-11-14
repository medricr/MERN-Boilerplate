const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Schema = new schema({

	username: {type: String},
	password: {type: String}, 
	bio: {type: String}
});

const User = mongoose.model("User", Schema);

module.exports = User;