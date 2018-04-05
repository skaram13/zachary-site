import React, { Component } from 'react';
import "./Portfolio.css";
import Header from "../Shared/Header/Header";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header title="PORTFOLIO"/>
            </div>
        )
    }
}

export default Portfolio;