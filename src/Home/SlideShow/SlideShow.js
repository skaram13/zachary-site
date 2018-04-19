import React, { Component } from 'react';
import './SlideShow.css';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';

let api_url = "http://photo-api-dev.us-east-1.elasticbeanstalk.com/homepage-photos";


class SlideShow extends Component {
    constructor(props){
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
        return(
            <Carousel className="carousel" interval={3000} carousel="true" slide>
                {
                    this.state.photos.map((photo, index) =>
                    <Carousel.Item className ="Slide-Container">
                        <img alt="slide" key={index} src={photo} />
                    </Carousel.Item>)
                }
            </Carousel>

        );
    }
}



export default SlideShow;
