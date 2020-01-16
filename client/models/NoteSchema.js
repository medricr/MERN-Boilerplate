const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.promise = Promise;

const NoteSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: { type: String },
	content: { type: String },
	author: { type: Schema.Types.ObjectId, ref: 'User' }
})

NoteSchema.pre('save', function (next) {
	console.log("note schema pre hook entered")
	console.log(this)
	console.log(this.content)
	if (!this.title || !this.content) {
		console.group("cannot save empty note")
	}
	else {
		this._id = new mongoose.Types.ObjectId();
		next();
	}
})

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
