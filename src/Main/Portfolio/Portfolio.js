import React, { Component } from 'react';
import "./Portfolio.css";
import Header from "../Shared/Header/Header";
import ImageContainer from "./ImageContainer/ImageContainer";
import pic1 from "../../assets/thumbnails/DIA-BEACON.jpg";

const images = [
    {thumbnail: pic1, key: 1, project_name: "diaBeaconImages", display_name:"DIA BEACON"},
    {thumbnail: pic1, key: 2, project_name: "diaBeaconImages", display_name:"COLLAGES"},
    {thumbnail: pic1, key: 3, project_name: "diaBeaconImages", display_name:"COLUMBIA"},
    {thumbnail: pic1, key: 4, project_name: "diaBeaconImages", display_name:"SACRED SPACE"},
    {thumbnail: pic1, key: 5, project_name: "diaBeaconImages", display_name:"TOZZER"}];


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const image_grid = images.map((image, index) =>
            <ImageContainer key={image.key} id={index} project_name={image.project_name} display={image.display_name} thumbnail={image.thumbnail}/>
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