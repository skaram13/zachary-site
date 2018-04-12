import React, { Component } from "react";
import "./Project.css";
import {withRouter} from 'react-router';
import {Carousel} from 'react-bootstrap';
import Header from "../../Shared/Header/Header";


class Project extends Component {
    render() {
        return(
            <div>
            <Header title="PROJECT"/>
                <Carousel className="photos" carousel="true" slide>
                    {slideItems}
                </Carousel>
                <h1 className="text">THIS IS A TEST BLAH BLAH BLAH</h1>
            </div>
        );
    }
}



export default Project;
