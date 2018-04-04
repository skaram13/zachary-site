import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar className="nav-bar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">ZACHARY TORRES</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavDropdown  eventKey={3} title="Manifesto" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Home</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.2}>Portfolio</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>CV</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Manifesto</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.5}>Blog</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.6}>Contact</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;