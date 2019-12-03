import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import API from './utils/API';

// Imported Components
import UserLogin from './components/UserLogin';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import Splashpage from './components/Splashpage';


class App extends React.Component {

	state = {
		username: "",
		password: "",
		bio: "",
		isLoggedIn: false,
		isSignedUp: false,
		currentUser: {},
		allUsers: []
	}
	// Captures info from form and places it in state
	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}

	// used to test the insertion of records from the react form into the database
	insertUser = () => {
		API.createUser({
			username: this.state.username,
			password: this.state.password
		}).then((result)=> {
			console.log(result.data)
		
		})
	}

	// used to run the user object through passport, hashing the password before storing it in the database
	registerUser = () => {
		API.registerUser({
			username: this.state.username,
			password: this.state.password
		}).then((result)=> {
			console.log(result)
			this.setState({ isSignedUp: true, currentUser: result.data });
		})
	}

	loginUser = () => {
		API.loginUser({
			username: this.state.username,
			password: this.state.password
		}).then((result)=> {
			console.log(result)
			console.log("leaving login");
			this.setState({isLoggedIn: true})
		})
	}



	getAllUsers = () => {
		API.getAllUsers()
			.then((result => {
				console.log(result.data);
				this.setState({allUsers: result.data})
			}))
	}


	render() {
		return (
			
			<Router>
			  <NavBar currentUser={this.state.currentUser} userStatus={this.state.isLoggedIn ? true : false} />
				<Switch>
					<Route exact path='/' component={Splashpage} />
					<Route exact path='/login' render={(props) => 
						<UserLogin 
							handleInputChange={this.handleInputChange} 
							insertUser={this.insertUser} 
							getAll={this.getAllUsers} 
							registerUser={this.registerUser} 
							loginUser={this.loginUser}
						/>} 
					/>
					<Route exact path='/profile' render={(props) => <UserProfile handleInputChange={this.handleInputChange}  />} />
				</Switch>
			</Router>
		)
	}
}

export default App;
