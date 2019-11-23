import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// Imported Components
import UserLogin from './components/UserLogin/UserLogin';


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

	render() {
		return (
			<Router>
			  <div className="container">
			    <h2>Mern Boilerplate</h2>
			  </div>
				<Route path='/' exact component={UserLogin} />
			</Router>
		)
	}
}

export default App;
