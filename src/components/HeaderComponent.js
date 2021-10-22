import React, {Component} from 'react'; 
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
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
            <Navbar dark sticky="top" expand="lg">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutme">
                                    Home
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        ); 
    }
}

export default Header;