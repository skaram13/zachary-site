import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import pic1 from "../../../assets/final-sections-a-b.jpg";
import pic2 from "../../../assets/axon-bw.jpg";
import pic3 from "../../../assets/final-section-c.jpg";
import pic4 from "../../../assets/Final Section_Edited.jpg";
import pic5 from "../../../assets/final-site-plan.jpg";
import pic6 from "../../../assets/massing.jpg";
import pic7 from "../../../assets/perspective-final.jpg";
import pic8 from "../../../assets/short-section.jpg";
import pic9 from "../../../assets/render-1-third-floor.tif";

class Slide extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount(){
    }

    render() {
        let pics = [pic1,pic2,pic3, pic4, pic5, pic6, pic7, pic8, pic9];

        return(
            <ReactCSSTransitionGroup>
                    <div className="App-Slide" style={{backgroundImage: 'url('+ pics[this.props.state.currentSlide]+')'}}/>
            </ReactCSSTransitionGroup>
        );
    }
}



export default Slide;
