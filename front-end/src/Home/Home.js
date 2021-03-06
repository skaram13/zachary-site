import React, { Component } from 'react';
import Row from "./Row/Row";
import "./Home.css";
import SlideShow from "./SlideShow/SlideShow";
import Footer from "../Main/Shared/Footer/Footer";
import {Link} from 'react-router-dom';
import logo from "../assets/LOGO.png";

class Home extends Component {
    render() {
        return(
            <div>
                <SlideShow/>
                <div className="row-centered row logo-row"><img className="logo-home" alt="logo" src={logo}/></div>
                <div className="home">
                    <Link to="/portfolio"><Row title="PORTFOLIO"/></Link>
                    <Link to="/cv"><Row title="CURRICULUM VITAE"/></Link>
                    <Link to="/manifesto"><Row title="DESIGN MANIFESTO"/></Link>
                    <Link to="/blog"><Row title="BLOG"/></Link>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
