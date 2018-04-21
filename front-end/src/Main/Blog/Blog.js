import React, { Component } from 'react';
import "./Blog.css";
import Header from "../Shared/Header/Header";
import essay1 from "../../assets/essays/TORRES_Postmodernist Homage.pdf";
import essay2 from "../../assets/essays/Torres_Saarinen.pdf";

class Blog extends Component {
    render() {
        return (
            <div>
                <Header title="BLOG"/>
                <div className="blog-container body-text">
                    <dl>
                        <dt><h1>2018</h1></dt>
                        <dd>Coming Soon...</dd>
                        <dt><h1>2017</h1></dt>
                        <dd><a href={essay1}>A Postmodernist Homage: The 2017 Chicago Architecture Biennial</a></dd>
                        <dt><h1>2016</h1></dt>
                        <dd><a href={essay2}>Materiality and Sacred Space in Eero Saarinen’s Kresge Chapel</a></dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default Blog;