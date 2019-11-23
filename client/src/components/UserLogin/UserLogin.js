import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, FormGroup, FormText, Label, Input, Button, Container } from 'reactstrap'

class UserLogin extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<Container>
				<Form>
					<FormGroup>
						<Label>Username</Label>
						<Input type="text" name="username" onChange={this.props.handleInputChange} />
					</FormGroup>
					<FormGroup>
						<Label>Password</Label>
						<Input type="text" name="password" onChange={this.props.handleInputChange} />
					</FormGroup>
					
				</Form>
			</Container>
		)
	}

}

export default UserLogin;