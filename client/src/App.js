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

	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}

	insertUser = () => {
		API.createUser({
			username: this.state.username,
			password: this.state.password
		}).then((result)=> {
			console.log(result.data)
			this.setState({isLoggedIn: true, currentUser: result.data});
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
					<Route exact path='/login' render={(props) => <UserLogin handleInputChange={this.handleInputChange} insertUser={this.insertUser} getAll={this.getAllUsers} />} />
					<Route exact path='/profile' render={(props) => <UserProfile handleInputChange={this.handleInputChange}  />} />
				</Switch>
			</Router>
		)
	}
}

export default App;
