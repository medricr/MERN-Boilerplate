import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from 'reactstrap';
import API from '../../utils/API';

class UserProfile extends React.Component {

	state = {
		currentId: "",
		title: "",
		body: ""
	}

	componentDidMount() {
		API.getCurrentUser().then((result)=> {
			this.setState({currentId: result.data})
		})
	}
	

	render() {
		return(
			<Container>
				testing baybeeee

			</Container>
		)
	}
}

export default UserProfile;