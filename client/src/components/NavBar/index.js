import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, Collapse, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

	constructor(props){
		super(props);
	}

	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md" className="navbar-static-top">
					{!this.props.userStatus ? 
						// <NavbarBrand className="nav-link" href="/">MERN Boilerplate</NavbarBrand>	
						<NavbarBrand>
							<NavLink>
								<Link className="nav-link" to='/'>
									MERN Boilerplate
								</Link>
							</NavLink>
						</NavbarBrand>

						:

						// <NavbarBrand className="nav-link" href='/'>MERN Boilerplate || Welcome: {this.props.currentUser.username} </NavbarBrand>
						<NavbarBrand>
							<NavLink>
								<Link className='nav-link' to='/'>
									MERN Boilerplate || Welcome: {this.props.currentUser.username}
								</Link>
							</NavLink>
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
										<NavLink>
											<Link className="nav-link" to='/login'>Login</Link>
										</NavLink>
									</DropdownItem>
									<DropdownItem>
										<NavLink>
											<Link className="nav-link" to='/mission'>Signup</Link>
										</NavLink>
									</DropdownItem>
									<DropdownItem>
										<NavLink>
											<Link className='nav-link' to='/history'>Link Three</Link>
										</NavLink>
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