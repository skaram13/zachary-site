import React, { Component } from "react";
import "./Project.css";
import {withRouter} from 'react-router';
import Img from 'react-image';
import {Carousel} from 'react-bootstrap';
import pic11 from "../../../assets/Projects/DIA-BEACON/pic1.jpg";
import pic12 from "../../../assets/Projects/DIA-BEACON/pic2.jpg";
import pic13 from "../../../assets/Projects/DIA-BEACON/pic3.jpg";
import Header from "../../Shared/Header/Header";

const pics = [pic11,pic12,pic13];

class Project extends Component {
    render() {
        const slideItems = pics.map((pic, index) =>
            <Carousel.Item className="photo">
                <Img alt="slide" key={index} src={pic} />
            </Carousel.Item>
        );
        return(
            <div>
            <Header title="PROJECT"/>
                <Carousel className="photos" carousel="true" slide>
                    {slideItems}
                </Carousel>
                <h1 className="text">THIS IS A TEST BLAH BLAH BLAH</h1>
            </div>
        );
    }
}



export default Project;
