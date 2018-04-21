import React, { Component } from 'react';
import './SlideShow.css';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';
const api_url = "http://photo-api-dev.us-east-1.elasticbeanstalk.com/homepage-photos";

class SlideShow extends Component {
    constructor(props){
        super(props);
        this.state = {photos: []};
    }

    componentDidMount(){
        //Grab the homepage photos from aws
        axios.get(api_url)
            .then((response) => {
                this.setState({photos: response.data.photos});
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    render() {
        const slides =  this.state.photos.map((photo, index) =>
            <Carousel.Item className ="slide-container">
                <img className="home-img" alt="slide" key={index} src={photo.photo_url} />
            </Carousel.Item>);

        return(
            <Carousel className="carousel" interval={3000} carousel="true" slide>
                {slides}
            </Carousel>

        );
    }
}

export default SlideShow;
