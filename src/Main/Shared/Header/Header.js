import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from "../../../assets/homepage/LOGO.png";
import "./Header.css";
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Link className="nav-home" to="/"><img className="nav-logo" alt="logo" src={logo}/></Link>
                </Navbar.Header>
                <Nav>
                    <NavItem href="/"><div className="nav-home" >ZACHARY TORRES</div></NavItem>
                    <NavDropdown className="nav-dropdown" eventKey={3} title={this.props.title} id="basic-nav-dropdown">
                        <MenuItem href="/"eventKey={3.1}>HOME</MenuItem>
                        <MenuItem href="/portfolio"eventKey={3.2}>PORTFOLIO</MenuItem>
                        <MenuItem href="/cv" eventKey={3.3}>CURRICULUM VITAE</MenuItem>
                        <MenuItem href="/manifesto" eventKey={3.4}>DESIGN MANIFESTO</MenuItem>
                        <MenuItem divider />
                        <MenuItem href="/blog" eventKey={3.5}>BLOG</MenuItem>
                        <MenuItem href="/contact" eventKey={3.6}>CONTACT</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;