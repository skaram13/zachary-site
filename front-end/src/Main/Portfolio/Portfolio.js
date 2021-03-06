import React, { Component } from 'react';
import "./Portfolio.css";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import ImageContainer from "./ImageContainer/ImageContainer";
import axios from "axios/index";
const api_url = "http://photo-api-dev.us-east-1.elasticbeanstalk.com/thumbnails";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }

    componentDidMount(){
        axios.get(api_url)
            .then((response) => {
                this.setState(
                    {photos: response.data.photos}
                );
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    render() {
        const image_grid = this.state.photos.map((photo, index) =>
            <div>
                {index % 2 === 0 ? <div className="clearfix visible-sm-block"/> : false}
                {index % 3 === 0 ? <div className="clearfix visible-md-block"/> : false}
                {index % 4 === 0 ? <div className="clearfix visible-lg-block"/> : false}
                <ImageContainer key={photo.key} id={index} project_name={photo.project_name} display={photo.display_name} thumbnail={photo.photo_url}/>
            </div>
        );

        return (
            <div>
                <Header title="PORTFOLIO"/>
                <div className="grid-container">
                    {image_grid}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Portfolio;