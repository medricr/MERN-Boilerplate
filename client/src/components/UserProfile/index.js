import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { 
	Container, 
	Form, 
	FormGroup, 
	Label, 
	Input, 
	Button, 
	ListGroup, 
	ListGroupItem, 
	ListGroupItemHeading, 
	ListGroupItemText,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter
	} from 'reactstrap';
import API from '../../utils/API';

// import './Stylesheet.css';

class UserProfile extends React.Component {

	state = {
		currentId: "",
		title: "",
		content: "",
		notes: [],
		modalOpen: false,
		activeItem: {}
	}
// COMPONENT UTITLITIES
// ==================================
	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}
	toggle = (item) => {
		this.setState(prevState => ({
			modalOpen: !prevState.modalOpen,
			activeItem: item
		}))
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
// ===================================
// COMPONENT METHODS
// +++++++++++++++++++++++++++++++++++
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
	updateNote = (item) => {

		let titleUpdate = "";
		let contentUpdate = "";

		// The following if/else blocks ensure that even if the user only updates 
		// one field of the note, the other will not be cleared
		if(this.state.title === ""){
			titleUpdate = item.title
		} else {
			titleUpdate = this.state.title;
		}

		if(this.state.content === ""){
			contentUpdate = item.content
		} else {
			contentUpdate = this.state.content
		}
		
		API.updateNote({
			noteId: item._id,
			noteTitle: titleUpdate,
			noteContent: contentUpdate
		}).then(()=> {
			API.getNotes().then((result)=> {this.setState({notes: result.data})})
			// State is then cleared to ensure that if the user goes to update another note, the information
			// from the first update is not retained
			this.setState({title: "", content: "", modalOpen: false})
			
		})
	}
// +++++++++++++++++++++++++++++++++++
	render() {
		return(
			<Container>		
				<Form>
					<FormGroup>
						<Label>Title</Label>
						<Input type='text' name="title" onChange={this.handleInputChange} />
					</FormGroup>
					<FormGroup>
						<Label>Body</Label>
						<Input type='text' name="content" onChange={this.handleInputChange} />
					</FormGroup>
					<Button onClick={this.saveUserNote} color="primary">SAVE</Button>
				</Form>
				< br/>
				{' '}
				<ListGroup>
					{this.state.notes.map((item)=> (
						<ListGroupItem key={item._id}>
							<ListGroupItemHeading>
								{item.title}
							</ListGroupItemHeading>
							<ListGroupItemText>
								{item.content}
							</ListGroupItemText>
							<Button onClick={()=> this.deleteNote(item._id)} color="danger" className="button">DELETE NOTE</Button>{' '}
							<Button onClick={()=> this.toggle(item)} color="warning">EDIT NOTE</Button>
						</ListGroupItem>
						
					))}
				</ListGroup>
				<Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
					<ModalHeader >
						<FormGroup>
							<Label>Note Title</Label>
							<Input type='text' name='title' onChange={this.handleInputChange} placeholder={this.state.activeItem.title} />

						</FormGroup>
					</ModalHeader>
					<ModalBody>
						<FormGroup>
							<Label>Note Body</Label>
							<Input type='text' name='content' onChange={this.handleInputChange} placeholder={this.state.activeItem.content} />
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button onClick={() => { this.updateNote(this.state.activeItem) }} color="warning">UPDATE NOTE</Button>
					</ModalFooter>
				</Modal> 
			</Container>
		)
	}
}

export default UserProfile;