import React, { Component } from 'react';
import './SlideShow.css';
import {Carousel} from 'react-bootstrap';
import pic1 from "../../assets/homepage/final-sections-a-b.jpg";


class SlideShow extends Component {
    render() {
        let pics = [pic1];
        const slideItems = pics.map((pic, index) =>
                <Carousel.Item>
                    <img alt="slide" key={index} src={pic} />
                </Carousel.Item>
            );
        return(
            <Carousel className="Slide-Container" interval={3000} carousel="true" slide>
                {slideItems}
            </Carousel>

        );
    }
}



export default SlideShow;
