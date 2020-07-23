import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Jumbotron, Card, CardBody, CardText, CardHeader} from 'reactstrap';

class Splashpage extends React.Component {

	render() {
		return(
			<Jumbotron>
				<Card>
					<CardBody>
						<CardHeader className='text-center'>
							Welcome to the MERN Boilerplate Project!
						</CardHeader>
						<CardText className="text-center">
							This project is intedned to be used as a starting point for a MERN stack application. 

							Above, you will find a navigation bar with options for logging in, creating a user, updating that users profile, and logging out. The project includes authenticaiton for its users using Javascript Web Token authentication.

							To modify the project, simply change, add, or remove components, controllers, and routes as needed.

							Good luck, and happy coding!!!

							- Mordrick R'lyeh
						</CardText>
					</CardBody>
				</Card>
			</Jumbotron>
		)
	}
}

export default Splashpage;