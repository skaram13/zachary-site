import React, { Component } from 'react';
import Img from 'react-image';
import "./ImageContainer.css";

class ImageContainer extends Component {
    render() {
        return (
            <div className="col-md-3 col-centered">
                <div className="portfolio-background">
                <h3 className="portfolio-text">Project {this.props.id}</h3>
                <Img className="portfolio-thumbnail" alt="art" src={this.props.thumbnail} />

                </div>
            </div>

        )
    }
}

export default ImageContainer;