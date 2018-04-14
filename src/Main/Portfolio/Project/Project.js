import React, { Component } from "react";
import "./Project.css";
import {withRouter} from 'react-router';
import Header from "../../Shared/Header/Header";


class Project extends Component {
    render() {
        return(
            <div>
            <Header title="PROJECT"/>
                <h1 className="text">THIS IS A TEST BLAH BLAH BLAH</h1>
            </div>
        );
    }
}



export default Project;
