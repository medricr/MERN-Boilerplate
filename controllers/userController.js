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

// TESTING - DO NOT COMMIT
	saveUserNote: function(req,res){

		// console.log("saveUSerNote entered")
		// console.log(req.body);

		let noteTitle = req.body.title;
		let noteContent = req.body.content;
		let noteAuthor = req.body.author

		// db.Note.findOne({title: noteTitle}, (err, matchedNote) => {
		// 	if(matchedNote){
		// 		return res.json({
		// 			error: `cannot have notes with duplicate titles`
		// 		})
		// 	}	

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

// GETNOTES - UNTESTED - DO BOT COMMIT

	// getnotes: function(req,res)
		// query user database and search for documents with matching user ids
			// if no match, return error
			// else, pull array of note ids
				// for each id, pull matching note from notes collection, and push onto an array of notes, with attached note id
				// return note array

	getNotes: function(req,res){

		// let userId = req.body.user;
		// let noteArray = []
		// console.log("current users id ==> " + req.user.id)

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

