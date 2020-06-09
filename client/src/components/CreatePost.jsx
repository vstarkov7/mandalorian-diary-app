import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSubmit();
        }}>
          <label className="create_post">Enter post title</label>
          <input
            className="create_post"
            name="title"
            type="string"
            value={this.props.formData.title}
            onChange={this.props.handleChange} />
          <label className="create_post">Enter post content</label>
          <input
            className="create_post content_entry"
            name="content"
            type="text"
            value={this.props.formData.content}
            onChange={this.props.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CreatePost