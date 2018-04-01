import React, { Component } from 'react';
import './SlideShow.css';
import {Carousel} from 'react-bootstrap';
import pic1 from "../../assets/final-sections-a-b.jpg";
import pic2 from "../../assets/axon-bw.jpg";
import pic3 from "../../assets/final-section-c.jpg";
import pic4 from "../../assets/Final Section_Edited.jpg";
import pic5 from "../../assets/final-site-plan.jpg";
import pic6 from "../../assets/massing.jpg";
import pic7 from "../../assets/perspective-final.jpg";
import pic8 from "../../assets/short-section.jpg";

class SlideShow extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let pics = [pic1,pic2,pic3, pic4, pic5, pic6, pic7, pic8];
        const slideItems = pics.map((pic, index) =>
                <Carousel.Item>
                    <img key={index} height="900px" width="900px" src={pic} />
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
