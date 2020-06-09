import React, { Component } from 'react';

// Same terinary form idea as create and update foods. This time we use a select drop down menu to show our flavors
class PostTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false
    }
  }

  render() {
    console.log(this.props.postItem)
    return (
      <div>
        <h1>Add a topic</h1>
        {/* {this.props.postItem === null ?
          <h1>Loading</h1>
          : */}

          {this.props.foundTopics === [] ?
            <h1>No topics selected</h1>
            :
            this.props.foundTopics.map(topic => (
              <div key={topic.id}>
                <p>{topic.name}</p>
              </div>
            ))

          // <h1>Loaded</h1>

        }
        {this.state.isAdd
          ?
          <div>
            {/* The value and onChange function go on the select tag.
                    Then we map through our flavors as option tags within the select tag */}
            <select value={this.props.selectedTopic} onChange={this.props.handleChange}>
              <option>Select a topic</option>
              {this.props.topics.map(topic => (
                <option>{topic.name}</option>
              ))}
            </select>
            <button onClick={() => {
              // addFlavorToFood takes the current food item and form data from app.js state to send to the API
              this.props.addTopicToPost(this.props.postItem)
            }}>Submit</button>
          </div>
          :
          <button onClick={() => {
            this.setState({
              isAdd: true
            })
          }}>Add</button>
        }

        {this.props.postItem &&
          <div>
            <h1>{this.props.postItem.title}</h1>

            {this.state.isAdd
              ?
              <div>
                {/* The value and onChange function go on the select tag.
                    Then we map through our flavors as option tags within the select tag */}
                <select value={this.props.selectedTopic} onChange={this.props.handleChange}>
                  <option>Select a topic</option>
                  {this.props.topics.map(topic => (
                    <option>{topic.name}</option>
                  ))}
                </select>
                <button onClick={() => {
                  // addFlavorToFood takes the current food item and form data from app.js state to send to the API
                  this.props.addTopicToPost(this.props.postItem)
                }}>Submit</button>
              </div>
              :
              <button onClick={() => {
                this.setState({
                  isAdd: true
                })
              }}>Add</button>
            }
          </div>
        }
      </div>
    )
  }
}

export default PostTopic;
