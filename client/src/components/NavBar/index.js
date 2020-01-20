import React from 'react';
import { Navbar, Nav, NavbarBrand, Collapse, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState((prevState)=> ({isOpen: !prevState}));
	}
	
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md" className="navbar-static-top">
					{!this.props.userStatus ?	
						<NavbarBrand tag={Link} to='/'>
							MERN Boilerplate
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
									<DropdownItem>
										<Link className="nav-link" to='/login'>Login</Link>
									</DropdownItem>
									<DropdownItem>
										<Link className="nav-link" to='/register'>Signup</Link>
									</DropdownItem>
									<DropdownItem>
										<Link className='nav-link' to='/profile'>Profile</Link>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

export default NavBar;