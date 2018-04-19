import React, { Component } from 'react';
import "./Portfolio.css";
import Header from "../Shared/Header/Header";
import ImageContainer from "./ImageContainer/ImageContainer";
import axios from "axios/index";
let api_url = "http://photo-api-dev.us-east-1.elasticbeanstalk.com/thumbnails";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {photos: []};
    }

    componentDidMount(){
        axios.get(api_url)
            .then((response) => {
                console.log(response);
                this.setState({photos: response.data.photos});
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    render() {
        const image_grid = this.state.photos.map((photo, index) =>
            <ImageContainer key={photo.key} id={index} project_name={photo.project_name} display={photo.display_name} thumbnail={photo.photo}/>
        );

        return (
            <div>
                <Header title="PORTFOLIO"/>
                <div className="grid-container">
                    {image_grid}
                </div>
            </div>
        )
    }
}

export default Portfolio;