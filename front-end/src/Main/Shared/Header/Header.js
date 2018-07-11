import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from "../../../assets/LOGO.png";
import "./Header.css";
import {Link} from 'react-router-dom';
import axios from "axios/index";
const api_url = "http://photo-api-dev.us-east-1.elasticbeanstalk.com/thumbnails";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }

    componentDidMount(){
        axios.get(api_url)
            .then((response) => {
                this.setState(
                    {photos: response.data.photos}
                );
                console.log(this.state.photos);
                console.log(this.state.photos.length);
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    render() {
        const project_menu_items = this.state.photos.map((photo, index) =>
            <div>
                <MenuItem className="dropdown-item" href={"/portfolio/project/" + photo.project_name} eventKey={index}>{photo.display_name}</MenuItem>
                {index < this.state.photos.length - 1 &&
                <MenuItem divider />
                }
            </div>
        );

        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Link className="nav-home" to="/"><img className="nav-logo" alt="logo" src={logo}/></Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem href="/"><div className="nav-home" >ZACHARY TORRES</div></NavItem>
                    <NavDropdown className="nav-dropdown" title={this.props.title} id="basic-nav-dropdown">
                        <div>
                            <MenuItem className="dropdown-item" href="/"eventKey={1}>HOME</MenuItem>
                            <MenuItem divider />
                            <MenuItem className="dropdown-item" href="/portfolio"eventKey={2}>PORTFOLIO</MenuItem>
                            <MenuItem divider />
                            <MenuItem className="dropdown-item" href="/cv" eventKey={3}>CURRICULUM VITAE</MenuItem>
                            <MenuItem divider />
                            <MenuItem className="dropdown-item" href="/manifesto" eventKey={4}>DESIGN MANIFESTO</MenuItem>
                            <MenuItem divider />
                            <MenuItem className="dropdown-item" href="/blog" eventKey={5}>BLOG</MenuItem>
                        </div>
                    </NavDropdown>
                    {this.props.project &&
                        <NavDropdown className="nav-dropdown" title={this.props.project} id="basic-nav-dropdown">
                            {project_menu_items }
                        </NavDropdown>
                    }
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;