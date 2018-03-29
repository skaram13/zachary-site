import React, { Component } from 'react';
import "./Row.css";

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {hover: "off-hover"};
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseLeave() {
        this.setState({hover: "off-hover"})
    }

    handleMouseEnter() {
        this.setState({hover: "hover"});
    }

    render() {
        return (
            <div className={this.state.hover}>
                <div className="row row-centered" onMouseLeave={this.handleMouseLeave}
                     onMouseEnter={this.handleMouseEnter}>
                    <div className="col-md-12 mx-auto col-centered">
                        <h3 className="row-text">{this.props.title}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Row;