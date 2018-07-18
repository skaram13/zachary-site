import React, { Component } from 'react';

class Post extends Component {
    render() {
        const blog_posts = this.props.posts.map((post) =>
            <div key={post.key}>
                <dd><a href={post.blog_url}>{post.display_name}</a></dd>
            </div>

        );

        blog_posts.reverse();
        return (
            <div>
                {blog_posts}
            </div>
        )
    }
}

export default Post;