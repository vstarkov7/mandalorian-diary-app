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
              <button>submit</button>
            </form>
          </div>
    )
  }
}

export default CreatePost