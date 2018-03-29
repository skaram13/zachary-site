import React, { Component } from 'react';
import Row from "../Row/Row";
import './SlideShow.css';
import cat from '../../assets/kitten2.jpg';
import cat2 from '../../assets/kitten3.jpg';
import cat3 from '../../assets/healthykittenmain.jpg';

class SlideShow extends Component {
    constructor(props){
        super(props);
        this.state = {currentCount: 0}
    }

    timer() {
        if(this.state.currentCount < 2) {
            this.setState({
                currentCount: this.state.currentCount + 1
            })}else{
            this.setState({
                currentCount: 0
            })}
    }
    componentDidMount() {
        this.currentSlide = setInterval(this.timer.bind(this), 3000);
    }
    componentWillUnmount(){
        clearInterval(this.currentSlide);
    }

    render() {
        let catImages  = [cat2,cat3,cat];
        return(
            <div>
                <div className="App-Slide-Container row mx-auto row-centered">
                    <div className="img-responsive App-Slide" style={{backgroundImage: 'url('+catImages[this.state.currentCount]+')'}}/>
                </div>
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
