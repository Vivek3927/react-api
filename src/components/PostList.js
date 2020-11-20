import Axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errMsg: "",
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response.data);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log("Went Something Wrong!");
        this.setState({ errMsg: "Went Something Wrong!" });
      });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of Data
        {posts.length
          ? posts.map((post) => (
              <div key={post.id}>
                {post.id} {post.title}
              </div>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
