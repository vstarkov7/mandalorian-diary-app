import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isAdd: false,
      isEdit: false
    }
  }
  async componentDidMount() {
    const posts = await this.props.getPosts(this.props.user.id);
    this.setState({
      posts
    })
  }
  render() {
    return (
      <div>
        {this.state.posts === []
          ?
          <h1>Loading</h1>
          :
          {
            this.state.posts.map(post => (
              <div key={post.id}>
                {/* Here is where we user a terinary for the edit form.
              If the isEdit in state is set to the current food id, then we show an edit form for just that item */}
                {this.state.isEdit === post.id
                  ?
                  <div>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      this.props.updatePost(post);
                      this.setState({
                        isEdit: false
                      });
                    }}>
                      <input
                        name="title"
                        type="string"
                        value={this.props.formData.name}
                        onChange={this.props.handleChange} />
                      <input
                        name="content"
                        type="text"
                        value={this.props.formData.content}
                        onChange={this.props.handleChange} />
                      <button>Submit</button>
                    </form>
                  </div>
                  :
                  // When the isEdit does not equal the current food id, display the food info like normal
                  // This inludes the food name inside a link, and edit button and delete button
                  <div>
                    <Link to={`/users/${this.props.user.id}/post/${post.id}`} onClick={() => { this.props.getPostItem(post.id) }}>{post.name}</Link>
                    <button onClick={() => {
                      // the edit form data is preset using the setFoodForm function and the current foods data 
                      this.props.setPostForm(post);
                      // then we set isEdit in state to the current foods id
                      this.setState({
                        isEdit: post.id
                      })
                    }}>edit</button>
                    <button onClick={() => { this.props.deletePost(post) }}>delete</button>
                  </div>
                }
              </div>
            ))
          }
        }
      </div>
    )
  }

}

export default ShowPosts;