import React, { Component } from 'react';
import Header from "../Shared/Header/Header";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header title="BLOG"/>
            </div>
        )
    }
}

export default Blog;