import React, { Component } from 'react';
import "./ImageContainer.css";
class ImageContainer extends Component {
    render() {
        return (
            <div className="col-md-3">
                <h3>Project {this.props.id}</h3>
                <img className="portfolio-thumbnail" alt="art" src={this.props.img} />
            </div>

        )
    }
}

export default ImageContainer;