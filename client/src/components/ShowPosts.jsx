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
          this.props.posts.map(post => (
            <div key={post.id}>
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
                    <label className="create_post">Enter post title</label>
                    <input
                      className="create_post"
                      name="title"
                      type="string"
                      value={this.props.formData.title}
                      onChange={this.props.handleChange} />
                    <label className="create_post">Enter post title</label>
                    <input
                      className="create_post"
                      name="content"
                      type="text"
                      value={this.props.formData.content}
                      onChange={this.props.handleChange} />
                    <button>Submit</button>
                  </form>
                </div>
                :
                <div className="show_post">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <div className="post_options">
                    <Link to={`/posts/add-topic`} onClick={() => { this.props.getPostItem(post.id); this.props.findTopics(post.id) }}>Add/View Topics</Link>
                    <button onClick={() => {
                      this.props.setPostForm(post);
                      this.setState({
                        isEdit: post.id
                      })
                    }}>Edit</button>
                    <button onClick={() => { this.props.deletePost(post) }}>Delete</button>
                  </div>
                </div>
              }
            </div>
          )

          )

          :
          <h1>Loading</h1>

        }
      </div>

    )
  }
}

export default ShowPosts;