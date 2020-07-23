import React from 'react';
import { Navbar, Nav, NavbarBrand, Collapse, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
//! concurrent update test - DO NOT LEAVE ME IN
import { InputGroup, Input } from 'reactstrap';
class NavBar extends React.Component {

	state = {
		isOpen: false,
		test: ""
	};

	toggle = () => {
		this.setState((prevState)=> ({isOpen: !prevState}));
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
			<div>
				<Navbar color="light" light expand="md" className="navbar-static-top">
					{!this.props.userStatus ?	
						<NavbarBrand tag={Link} to='/'>
							MERN Boilerplate ------ {this.state.test}
						</NavbarBrand>

						:

						<NavbarBrand tag={Link} to='/'>
							MERN Boilerplate || Welcome: {this.props.currentUser.username}
						</NavbarBrand>
					}
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									More
							</DropdownToggle>
								<DropdownMenu right>
									{!this.props.userStatus ?
										<DropdownItem>
											<Link className="nav-link" to='/login'>Login</Link>
										</DropdownItem>

										:

										<DropdownItem>
											<Link className='nav-link' to='/' onClick={this.props.logoutUser}>Logout</Link>
										</DropdownItem>
									}
									{!this.props.userStatus ?
										<DropdownItem>
											<Link className="nav-link" to='/register'>Signup</Link>
										</DropdownItem>

										:

										<DropdownItem>
											<Link className='nav-link' to='/profile'>Profile</Link>
										</DropdownItem>
									}
									
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
				//! concurrent update test - DO NOT LEAVE ME IN
				<InputGroup>
					<Input  name='test' placeholder='type in me' onChange={this.handleInputChange}/>
				</InputGroup>
			</div>
		)
	}
}

export default NavBar;