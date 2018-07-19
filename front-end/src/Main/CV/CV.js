import React, { Component } from 'react';
import "./CV.css";
import Header from "../Shared/Header/Header";
import resume from "../../assets/TORRES_RESUME 2.5.pdf";
import email_logo from "../../assets/black-email-envelope.jpg";
import linkedin from "../../assets/linkedin.jpg";

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
                        <h4>

                            <a href="mailto:zacharygtorres@gmail.com">
                                <img className="icon" src={email_logo} alt={"email"}/>
                                zacharygtorres@gmail.com
                            </a>
                        </h4>
                        <h4>
                            <a href="https://www.linkedin.com/in/zachary-torres-20a039a6">
                                <img className="icon" src={linkedin} alt={"email"}/>
                                Connect on LinkedIn
                            </a>
                        </h4>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CV;