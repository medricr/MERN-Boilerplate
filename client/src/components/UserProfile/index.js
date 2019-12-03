import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardBody, CardText, CardHeader, CardFooter, } from 'reactstrap';

class UserProfile extends React.Component {

	constructor(props){
		super(props)
	}

	render() {
		return(
			<div>
				<Card>
					<CardBody>
						<CardText>Welcome, </CardText>
					</CardBody>
				</Card>
			</div>
		)
	}

}

export default UserProfile;