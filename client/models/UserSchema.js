const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const UserSchema = new Schema({

	_id: Schema.Types.ObjectId,
	username: {type: String},
	password: {type: String}, 
	bio: {type: String},

	notes: [{type: Schema.Types.ObjectId, ref: 'Note'}]
	
});

UserSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

UserSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this._id = new mongoose.Types.ObjectId();
		this.password = this.hashPassword(this.password)
		next()
	}
});

const NoteSchema = new Schema({

	title: {type: String},
	content: {type: String},

	author: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Note = mongoose.model("Note", NoteSchema);
const User = mongoose.model("User", UserSchema);

module.exports = User, Note;