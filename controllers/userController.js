// Bring in the list of models from the models folder
const db = require('../client/models');

// const mongoose = require('mongoose')

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

	getCurrentUser: function(req,res){
		if(req.user){
			res.json(req.user.id)
		}
		else{
			res.json("no user found")
		}
	},

// Saves note to the notes collection with a title, body, and author id. Once completed, 
// the note is pushed onto an array of note id's in the user document.
// TESTED - COMMITED 1/14/2020
	saveUserNote: function(req,res){

		let noteTitle = req.body.title;
		let noteContent = req.body.content;
		let noteAuthor = req.body.author

		const newNote = new db.Note({
			'title': noteTitle,
			'content': noteContent,
			'author': noteAuthor
		})

		newNote.save((err, savedNote)=> {
			if(err){
				return res.json(err)
			}
			db.User.findOneAndUpdate({ _id: noteAuthor }, { $push: { notes: newNote._id } }, (err, updatedUser) => {
				if (err) {
					return res.json(err)
				}
				return res.json(updatedUser)
			})
		})	

	},

// Grabs the user id from the request, and pull down the array of node objectIds. Query 
// the notes collection, converting objectIds to the full documents (titles, bodys, etc.), 
// and return that array.
// TESTED - COMMITED 1/14/2020
	getNotes: function(req,res){

		db.User.findById({_id: req.user.id}, (err, matchedUser)=> {
			if(err){
				return res.json(err)
			}
			
			db.Note.find({_id: {$in: matchedUser.notes}}, (err, notes)=> {
				if(err){
					return res.json(err)
				}
				return res.json(notes);
			})
		})

		

	}

}

