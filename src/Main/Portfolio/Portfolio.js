import React, { Component } from 'react';
import "./Portfolio.css";
import Header from "../Shared/Header/Header";
import ImageContainer from "./ImageContainer/ImageContainer";
import pic1 from "../../assets/thumbnails/COLLAGES.jpg";
import pic2 from "../../assets/thumbnails/COLUMBIA.jpg";
import pic3 from "../../assets/thumbnails/DIA-BEACON.jpg";
import pic4 from "../../assets/thumbnails/Sacred-Space.jpg";
import pic5 from "../../assets/thumbnails/TOZZER.jpg";

const images = [
    {img: pic1, key: 1},
    {img: pic2, key: 2},
    {img: pic3, key: 3},
    {img: pic4, key: 4},
    {img: pic5, key: 5}];


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const image_grid = images.map((image, index) =>
            <div>
                <ImageContainer key={image.key} id={index} img={image.img} />
            </div>
        );

        return (
            <div>
                <Header title="PORTFOLIO"/>
                {image_grid}
            </div>
        )
    }
}

export default Portfolio;