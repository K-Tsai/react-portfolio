import React, {Component} from 'react'; 
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
    }
    
    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <Navbar className="navbar" dark sticky="top" expand="lg">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutme">
                                    About Me
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/projects">
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                    Contact Me
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        ); 
    }
}

export default Header;