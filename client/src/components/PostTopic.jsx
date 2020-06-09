import React, { Component } from 'react';

// Same terinary form idea as create and update foods. This time we use a select drop down menu to show our flavors
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

              // <h1>Loaded</h1>

            }
            {this.state.isAdd
              ?
              <div>
                {/* The value and onChange function go on the select tag.
                    Then we map through our flavors as option tags within the select tag */}

                <select className="topic_select" value={this.props.selectedTopic} onChange={this.props.handleChange}>
                  <option>Select a topic</option>
                  {this.props.topics.map(topic => (
                    <option>{topic.name}</option>
                  ))}
                </select>
                <button onClick={() => {
                  // addFlavorToFood takes the current food item and form data from app.js state to send to the API
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
