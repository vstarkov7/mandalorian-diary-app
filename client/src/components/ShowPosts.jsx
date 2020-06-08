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
                      value={this.props.formData.title}
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
                <div>
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                  {/* {this.props.findTopics(post).map(async topic => (
                    <div key={topic.id}>
                      <p>{topic.name}</p>
                    </div>
                  )
                  )} */}
                  <Link to={`/posts/add-topic`} onClick={() => { this.props.getPostItem(post.id); this.props.findTopics(post.id) }}>Add a topic</Link>
                  <button onClick={() => {
                    // the edit form data is preset using the setFoodForm function and the current foods data 
                    this.props.setPostForm(post);
                    // then we set isEdit in state to the current foods id
                    this.setState({
                      isEdit: post.id
                    })
                  }}>Edit</button>
                  <button onClick={() => { this.props.deletePost(post) }}>Delete</button>
                  <br />
                </div>
              }
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