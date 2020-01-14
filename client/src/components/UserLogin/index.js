import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import {Redirect} from 'react-router-dom';

class UserLogin extends React.Component {


	render() {
		return (
			<Container>
				{this.props.userStatus ? <Redirect to='/' />
					:
					<Form>
						<FormGroup>
							<Label>Username</Label>
							<Input type="text" name="username" onChange={this.props.handleInputChange} />
						</FormGroup>
						<FormGroup>
							<Label>Password</Label>
							<Input type="password" name="password" onChange={this.props.handleInputChange} />
						</FormGroup>
						{/* <Button onClick = {this.props.insertUser}>SUBMIT</Button>
					<Button onClick = {this.props.getAll}>SHOW ALL USERS</Button>
					<Button onClick = {this.props.registerUser}>REGISTER</Button> */}
						<Button onClick={this.props.loginUser}>LOGIN</Button>
						<Button onClick={this.props.logoutUser}>LOGOUT</Button>
						<Button onClick={this.props.registerUser}>REGISTER</Button>
					</Form>
				}
				
			</Container>
		)
	}

}

export default UserLogin;