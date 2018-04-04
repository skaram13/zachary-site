import React, { Component } from 'react';
import "./Portfolio.css";
import PhotoContainer from "./PhotoContainer/PhotoContainer";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <PhotoContainer/>
            </div>
        )
    }
}

export default Portfolio;