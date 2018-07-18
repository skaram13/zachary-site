import React, { Component } from "react";
import "./Project.css";
import Header from "../../Shared/Header/Header";
import axios from "axios/index";
const base_url = "http://photo-api-dev.us-east-1.elasticbeanstalk.com/projects/";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }

    componentDidMount(){
        const url = base_url + this.props.match.params.project_name;
        axios.get(url)
            .then((response) => {
                this.setState(
                    {photos: response.data.photos}
                );
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    render() {
        const image_grid = this.state.photos.map((photo) =>
            <div>
                <img className="photo" alt="art" src={photo.photo_url} />
            </div>

        );

        const src = "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-200745676188/writeups/" + this.props.match.params.project_name + ".pdf";

        return(
            <div>
                <Header title="PORTFOLIO" project={this.props.match.params.project_name.replace("-", " ")}/>
                <h1 className="header-text">{this.props.match.params.project_name.replace("-", " ")}</h1>
                <div className="project-container">
                    <div>
                    {image_grid}
                    </div>
                </div>
                <div className="sidenav">
                    <iframe className="sidebar" src={src} frameBorder="10"/>
                </div>
            </div>
        );
    }
}



export default Project;
