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


// UNTESTED - DO NOT COMMIT
	saveUserNote: function(req,res){

		console.log("saveUSerNote entered")
		console.log(req.body);

		let submittedTitle = req.body.title;
		let submittedContent = req.body.content;

		db.Note.findOne({title: submittedTitle}, (err, matchedNote) => {
			if(matchedNote){
				return res.json({
					error: `cannot have notes with duplicate titles`
				})
			}
			
			
				const newNote = new db.Note({
					'title': submittedTitle,
					'content': submittedContent
				})

				newNote.save((err, savedNote)=> {
					if(err){
						return res.json(err)
					}
					return res.json(savedNote);


				})



			
		})

		// const newNote = new db.Note({
		// 	'title': submittedTitle,
		// 	'content': submittedContent
		// })

		// newNote.save((err, savedNote) => {
		// 	if (err) {
		// 		return res.json(err)
		// 	}
		// 	return res.json(savedNote);


		// })

		// newNote.save((err, savedNote) => {
		// 	if(err){
		// 		res.json(err)
		// 	}
		// 	else{
		// 		res.json(savedNote)
		// 	}
		// })


	}

}