import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import API from '../../utils/API';

class UserProfile extends React.Component {

	state = {
		currentId: "",
		title: "",
		content: "",
		notes: []
	}

	// Grabs the current user id on load, and uses that to pull any notes associated with that
	// user from the database
	componentDidMount() {
		API.getCurrentUser().then((result)=> {
			this.setState({currentId: result.data})
		}).then(
			API.getNotes().then((result)=>{this.setState({notes: result.data})})
		)
	}

	// Updates the displayed list of notes when the user enters a new one on the page
	// componentDidUpdate(){
	// 	API.getNotes().then((result)=> {
	// 		if(this.state.notes.length != result.data.length){
	// 			this.setState({notes: result.data})
	// 		}
	// 	})
	// }

	// Captures info from form and places it in state
	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}

	saveUserNote = () => {
		API.saveUserNote({
			title: this.state.title,
			content: this.state.content,
			author: this.state.currentId
		}).then(()=> {
			API.getNotes().then((result)=> {this.setState({notes: result.data})})
		})
	}

	deleteNote = (buttonId) => {
		API.deleteNote({
			currentId: this.state.currentId,
			noteId: buttonId
		}).then(()=> {
			API.getNotes().then((result)=> {this.setState({notes: result.data})})
		})
	}

	render() {
		return(
			<Container>
				
				<Form>
					<FormGroup>
						<Label>Title of note</Label>
						<Input type='text' name="title" onChange={this.handleInputChange} />
					</FormGroup>

					<FormGroup>
						<Label>Title of note</Label>
						<Input type='text' name="content" onChange={this.handleInputChange} />
					</FormGroup>
					<Button onClick={this.saveUserNote}>SAVE</Button>
				</Form>

				<ListGroup>
					{this.state.notes.map((item)=> (
						<ListGroupItem>
							<ListGroupItemHeading>
								{item.title}
							</ListGroupItemHeading>
							<ListGroupItemText>
								{item.content}
							</ListGroupItemText>
							<Button onClick={()=> this.deleteNote(item._id)} >DELETE NOTE</Button>
						</ListGroupItem>
					))}
				</ListGroup>

			</Container>
		)
	}
}

export default UserProfile;