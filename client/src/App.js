import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import './App.css';
import PostsIndex from './components/PostsIndex.jsx'
import { readAllTopic, readOneTopic, readAllPost, readOnePost, createPost, updatePost, destroyPost, putPostTopic, loginUser, registerUser, verifyUser, removeToken } from './services/api-helper';
import { NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      posts: [],
      currentUser: null,
      topicItem: null,
      postItem: null,
      topicFormData: {
        name: ""
      },
      postFormData: {
        title: "",
        content: ""
      },
      authFormData: {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: ""
      },
      selectedTopic: ''
    }
  }

  async componentDidMount() {
    const topics = await readAllTopic();
    this.setState({
      topics
    })
  }

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  getTopics = async () => {
    const topics = await readAllTopic();
    this.setState({ topics });
  }

  getTopicItem = async (id) => {
    const topicItem = await readOneTopic(id);
    this.setState({ topicItem });
  }

  getPosts = async (id) => {
    const posts = await readAllPost(id);
    this.setState({ posts });
  }

  getPostItem = async (userId, id) => {
    const postItem = await readOnePost(userId, id);
    this.setState({ postItem });
  }

  addPost = async (id) => {
    const newPost = await createPost(this.state.formData, id)
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost],
      formData: {
        title: "",
        content: ""
      }
    }))
  }

  putPost = async (userId, postItem) => {
    const updatedPostItem = await this.updatePost(this.state.formData, userId, postItem.id);
    this.setState(prevState => ({
      posts: prevState.posts.map(singlePost => {
        return singlePost.id === postItem.id ? updatedPostItem : singlePost
      })
    }))
  }


  deletePost = async (userId, postItem) => {
    await destroyPost(userId, postItem.id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(singlePost => singlePost.id !== postItem.id)
    }))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ postFormData: { [name]: value } });
  }

  setPostForm = (post) => {
    this.setState({
      postFormData: {
        title: post.title,
        content: post.content
      }
    })
  }

  addTopicToPost = async (postItem) => {
    const newTopic = this.state.topics.find(topic => topic.name === this.state.selectedTopic);
    const newPostItem = await putPostTopic(postItem.id, newTopic.id);
    this.setState({
      postItem: newPostItem
    })
  }

  topicForm = (e) => {
    this.setState({
      selectedTopic: e.target.value
    })
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    removeToken();
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/"><h1>Home</h1></Link>
          {/* Here we use a terinary to check if there is a logged in user set in state.
              If there is no logged in user, we show a login button instead of the site nav */}
          {this.state.currentUser
            ?
            <div>
              {/* This is a greeting to the user if there user info has been set in state.
              We use the guard operator to check '&&' */}
              <h3>Hi {this.state.currentUser.first_name && this.state.currentUser.email}<button onClick={this.handleLogout}>logout</button></h3>
              <Link to="/food">View All Food</Link>
              &nbsp;
              <Link to="/flavors">View All Flavors</Link>
              <hr />
            </div>
            :
            <div>
              <button onClick={this.handleLoginButton}>Login/register</button>
              <button onClick={this.handleLoginButton}>Login/register</button>
            </div>
          }
        </header>
        <h1>Test</h1>

        <Route path='/topics' render={() => (
          <PostsIndex
            posts={this.state.posts}
          />
        )} />
      </div>
    );
  }

}

export default App;
