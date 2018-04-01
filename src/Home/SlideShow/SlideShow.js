import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Row from "../Row/Row";
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
        this.state = {currentSlide: 0}
    }

    timer() {
        if(this.state.currentSlide < 8) {
            console.log(this.state.currentSlide);
            this.setState({
                currentSlide: this.state.currentSlide + 1
            })}else{
            this.setState({
                currentSlide: 0
            })}

    }
    componentDidMount() {
        this.currentSlide = setInterval(this.timer.bind(this), 5000);
    }
    componentWillUnmount(){
        clearInterval(this.currentSlide);
    }

    render() {
        let pics = [pic1,pic2,pic3, pic4, pic5, pic6, pic7, pic8];
        const slideItems = pics.map((pic, index) =>
                <Carousel.Item>
                    <img key={index} height="900px" width="900px" src={pic} />
                </Carousel.Item>
            );
        return(
            <div>
                <Carousel className="Slide-Container" interval={3000} carousel="true" slide>
                    {slideItems}
                </Carousel>
                <Row title="PORTFOLIO"/>
                <Row title="CURRICULUM VITAE"/>
                <Row title="DESIGN MANIFESTO"/>
                <Row title="BLOG"/>
                <Row title="CONTACT"/>
            </div>

        );
    }
}



export default SlideShow;
