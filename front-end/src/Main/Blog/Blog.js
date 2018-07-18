import React, { Component } from 'react';
import "./Blog.css";
import Header from "../Shared/Header/Header";
import Post from "./Post/Post";
import axios from "axios/index";
const base_url = "http://photo-api-dev.us-east-1.elasticbeanstalk.com/blog";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            years_sorted: []
        };
    }

    componentDidMount(){
        axios.get(base_url)
            .then((response) => {
                let blog_posts = {};
                response.data.posts.forEach(function(element) {
                    const blog_year = element.blog_year;
                    const order_number = element.order_number;

                    if(blog_year in blog_posts){
                        blog_posts[blog_year][order_number-1] = element;
                    }else{
                        blog_posts[blog_year] = [];
                        blog_posts[blog_year][order_number-1] = element;
                    }

                });
                const years_sorted = Object.keys(blog_posts).sort(function(a,b){return blog_posts[a]-blog_posts[b]})
                years_sorted.reverse();
                console.log(years_sorted);
                this.setState(
                    {
                        posts: blog_posts,
                        years_sorted: years_sorted
                    }
                );

            })
            .catch((error)=>{
                console.log(error);
            });
    }

    render() {
        const blog_posts = this.state.years_sorted.map((year) =>
            <div key={year}>
                <dt><h1>{year}</h1></dt>
                <Post posts={this.state.posts[year]}/>
            </div>

        );

        return (
            <div>
                <Header title="BLOG"/>
                <div className="blog-container body-text">
                    <dl>
                        {blog_posts}
                    </dl>
                </div>
            </div>
        )
    }
}

export default Blog;