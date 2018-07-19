import React, { Component } from 'react';
import "./CV.css";
import Header from "../Shared/Header/Header";
import resume from "../../assets/TORRES_RESUME 2.5.pdf";
import email_logo from "../../assets/black-email-envelope.jpg";
import Footer from "../Shared/Footer/Footer";


class CV extends Component {
    render() {
        return (
            <div>
                <Header title="CURRICULUM VITAE"/>
                <div className="cv-container body-text">
                    <div className="row">
                        <h1><a href={resume}>LINK TO CURRICULUM VITAE</a></h1>
                    </div>
                    <div className="row">
                        <h3>GET IN TOUCH</h3>
                    </div>
                    <div className="row">
                        <h4>
                            <img className="icon" src={email_logo} alt={"email"}/>
                            zacharygtorres@gmail.com
                        </h4>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CV;