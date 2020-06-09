import React, { Component } from 'react';

class PostTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false
    }
  }
  async componentDidMount() {
    await this.props.getTopics
  }
  render() {
    return (
      <div>
        <h2>Add/View Topics</h2>

        {this.props.postItem &&
          <div className="show_post">
            <h3>{this.props.postItem.title}</h3>
            <p>{this.props.postItem.content}</p>
            <div className="associated_topics">Associated Topics:</div>
            {this.props.foundTopics === [] ?
              <h1>No topics selected</h1>
              :
              this.props.foundTopics.map(topic => (
                <div className="show_topics" key={topic.id}>
                  <div>{topic.name}</div>
                </div>
              ))

            }
            {this.state.isAdd
              ?
              <div>

                <select className="topic_select" value={this.props.selectedTopic} onChange={this.props.handleChange}>
                  <option>Select a topic</option>
                  {this.props.topics.map(topic => (
                    <option>{topic.name}</option>
                  ))}
                </select>
                <button onClick={() => {
                this.props.addTopicToPost(this.props.postItem); 
                this.props.handleSubmitPost();
                }}>Submit</button>
              </div>
              :
              <button className="add_topic_button" onClick={() => {
                this.setState({
                  isAdd: true
                })
              }}>Add Topic</button>
            }
          </div>
        }
      </div>
    )
  }
}

export default PostTopic;
