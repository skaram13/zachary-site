import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from "../../../assets/LOGO.png";
import "./Header.css";
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Link className="nav-home" to="/"><img className="nav-logo" alt="logo" src={logo}/></Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem href="/"><div className="nav-home" >ZACHARY TORRES</div></NavItem>
                    <NavDropdown className="nav-dropdown" eventKey={3} title={this.props.title} id="basic-nav-dropdown">
                        <MenuItem href="/"eventKey={3.1}>HOME</MenuItem>
                        <MenuItem divider />
                        <MenuItem href="/portfolio"eventKey={3.2}>PORTFOLIO</MenuItem>
                        <MenuItem divider />
                        <MenuItem href="/cv" eventKey={3.3}>CURRICULUM VITAE</MenuItem>
                        <MenuItem divider />
                        <MenuItem href="/manifesto" eventKey={3.4}>DESIGN MANIFESTO</MenuItem>
                        <MenuItem divider />
                        <MenuItem href="/blog" eventKey={3.5}>BLOG</MenuItem>
                    </NavDropdown>
                    {this.props.project &&
                        <NavDropdown className="nav-dropdown" eventKey={3} title={this.props.project} id="basic-nav-dropdown">
                            <MenuItem href="/portfolio/project/COLLAGES"eventKey={3.1}>COLLAGES</MenuItem>
                            <MenuItem divider />
                            <MenuItem href="/portfolio/project/COLUMBIA" eventKey={3.2}>COLUMBIA</MenuItem>
                            <MenuItem divider />
                            <MenuItem href="/portfolio/project/DIA-BEACON" eventKey={3.3}>DIA BEACON</MenuItem>
                            <MenuItem divider />
                            <MenuItem href="/portfolio/project/SACRED-SPACE" eventKey={3.4}>SACRED SPACE</MenuItem>
                            <MenuItem divider />
                            <MenuItem href="/portfolio/project/TOZZER"eventKey={3.5}>TOZZER</MenuItem>
                        </NavDropdown>
                    }
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;