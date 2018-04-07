import React, { Component } from 'react';
import './SlideShow.css';
import Img from 'react-image';
import {Carousel} from 'react-bootstrap';
import pic1 from "../../assets/homepage/final-sections-a-b.jpg";
import pic2 from "../../assets/homepage/axon-bw.jpg";
import pic3 from "../../assets/homepage/final-section-c.jpg";
import pic4 from "../../assets/homepage/Final Section_Edited.jpg";
import pic5 from "../../assets/homepage/final-site-plan.jpg";
import pic6 from "../../assets/homepage/massing.jpg";
import pic7 from "../../assets/homepage/perspective-final.jpg";
import pic8 from "../../assets/homepage/short-section.jpg";

class SlideShow extends Component {
    render() {
        let pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
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
