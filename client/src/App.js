import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends React.Component {
	render() {
		return (
			<Router>
			  <div className="container">
			    <h2>Mern Boilerplate</h2>
			  </div>
			  <Route path='/' exact component={TodoList} />
			  <Route path='/edit/:id' component={EditTodo} />
			  <Route path='create' component={CreateTodo} />
			</Router>
		)
	}
}

export default App;
