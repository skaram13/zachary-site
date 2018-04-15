import React, { Component } from 'react';
import "./ImageContainer.css";
import {Link} from 'react-router-dom';


class ImageContainer extends Component {
    render() {
        return (
            <div>
                <div className="col-md-2">
                    <Link to={"/portfolio/project/:" + this.props.project_name}>
                        <h3 className="portfolio-text">{this.props.display}</h3>
                        <img className="portfolio-thumbnail" alt="art" src={this.props.thumbnail} />
                    </Link>
                </div>
            </div>

        )
    }
}

export default ImageContainer;