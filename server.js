const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");

const passport = require("./passport");
const session = require("express-session");

const PORT = process.env.PORT || 3001;
// const testRoutes = express.Router();
const routes = require('./routes');


app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.use(session({secret: 'fortheemperor'}));
app.use(passport.initialize());
app.use(passport.session());

// Establish connection to database
// Anything following localhost/ can be changed to fit whatever naming convention fits the project best 
mongoose.connect('mongodb://localhost/TEST', { useNewUrlParser: true });
const connection = mongoose.connection;

// Check connection to db
connection.once('open', function () {
	console.log("MongoDB database connection established successfully");
})

// Spin up server
app.listen(PORT, function () {
	console.log("Server is running on port " + PORT);
});