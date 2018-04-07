import React, { Component } from 'react';
import "./Portfolio.css";
import Header from "../Shared/Header/Header";
import {Link} from 'react-router-dom';
import ImageContainer from "./ImageContainer/ImageContainer";
import pic3 from "../../assets/thumbnails/COLLAGES.jpg";
import pic2 from "../../assets/thumbnails/COLUMBIA.jpg";
import pic1 from "../../assets/thumbnails/DIA-BEACON.jpg";
import pic4 from "../../assets/thumbnails/Sacred-Space.jpg";
import pic5 from "../../assets/thumbnails/TOZZER.jpg";

const images = [
    {thumbnail: pic1, key: 1, project_name: "diaBeaconImages"},
    {thumbnail: pic2, key: 2, project_name: "diaBeaconImages"},
    {thumbnail: pic3, key: 3, project_name: "diaBeaconImages"},
    {thumbnail: pic4, key: 4, project_name: "diaBeaconImages"},
    {thumbnail: pic5, key: 5, project_name: "diaBeaconImages"}];


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const image_grid = images.map((image, index) =>
            <Link to={"/portfolio/project/:" + image.project_name}>
                <ImageContainer key={image.key} id={index} thumbnail={image.thumbnail}/>
            </Link>
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