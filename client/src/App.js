import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import API from './utils/API';

// Imported Components
import UserLogin from './components/UserLogin/UserLogin';
import NavBar from './components/NavBar/NavBar';


class App extends React.Component {

	state = {
		username: "",
		password: "",
		isLoggedIn: false,
		isSignedUp: false,
		currentUser: {}
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
			this.setState({isLoggedIn: true, currentUser: result.data.user});
		})
	}

	render() {
		return (
			
			<Router>
			  <NavBar />
				<Route exact path='/' render={(props)=> <UserLogin handleInputChange={this.handleInputChange} insertUser={this.insertUser} />} />
			</Router>
		)
	}
}

export default App;
