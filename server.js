const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("./passport");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());
app.use(session({secret: 'fortheemperor', resave: false}));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV) {
	app.use(express.static("client/build"));
}

app.use(routes);

// USED FOR SERVING STATIC ASSETS IN DEPLOYMENT
app.get("*", function (req, res) {
	var directory;
	if (process.env.NODE_ENV) {
		directory = "build";
	} else {
		directory = "public";
	}

	res.sendFile(path.join(__dirname, `./client/${directory}/index.html`));

});

// Establish connection to database
// Anything following localhost/ can be changed to fit whatever naming convention fits the project best 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/TEST', { useNewUrlParser: true });
const connection = mongoose.connection;

// Check connection to db
connection.once('open', function () {
	console.log("MongoDB database connection established successfully");
})
connection.on('error', (err)=> {console.log('connection error: ', err)}); 

// Spin up server
app.listen(PORT, function () {
	console.log("Server is running on port " + PORT);
});