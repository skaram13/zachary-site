import React, { Component } from 'react';
import Row from "./Row/Row";
import SlideShow from "./SlideShow/SlideShow";
import {Link} from 'react-router-dom';


class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
                <div>
                    <SlideShow/>
                    <Link to="/portfolio"><Row title="PORTFOLIO"/></Link>
                    <Link to="/cv"><Row title="CURRICULUM VITAE"/></Link>
                    <Link to="/manifesto"><Row title="DESIGN MANIFESTO"/></Link>
                    <Link to="/blog"><Row title="BLOG"/></Link>
                    <Link to="/contact"><Row title="CONTACT"/></Link>
                </div>
        );
    }
}



export default Home;
