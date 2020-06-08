import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false,
      isAdd: false,
      isEdit: false
    }
  }
  async componentDidMount() {
    const posts = await this.props.getPosts(this.props.user.id);
    this.setState({
      isLoaded: true,
      isEdit: false
    })
  }
  render() {
    return (
      <div>
        {this.state.isLoaded
          ?
          // <h1>Loaded</h1>
          this.props.posts.reverse().map(post => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <button onClick={() => { this.props.deletePost(post) }}>Delete</button>
              <br />
            </div>
          )

          )

          :
          <h1>Loading</h1>
          // this.state.posts.map(post => (
          //   <div key={post.id}>
          //     <h1>{post.title}</h1>
          //     <p>{post.content}</p>
          //     <br />
          //   </div>
          // )

          // )

        }
      </div>

    )
  }
}

export default ShowPosts;