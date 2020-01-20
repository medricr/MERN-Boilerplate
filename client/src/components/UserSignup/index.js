import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'

class UserSignup extends React.Component {

	render(){
		return(
			<Container>
				<Form>
					<FormGroup>
						<Label>Username</Label>
						<Input type="text" name="username" onChange={this.props.handleInputChange} />
					</FormGroup>
					<FormGroup>
						<Label>Password</Label>
						<Input type="password" name="password" onChange={this.props.handleInputChange} />
					</FormGroup>
					<Button onClick={this.props.registerUser}>Register Account</Button>
				</Form>
			</Container>
		)
	}
}

export default UserSignup;