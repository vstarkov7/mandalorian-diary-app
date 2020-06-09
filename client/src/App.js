import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import './App.css';
import PostsIndex from './components/PostsIndex.jsx'
import PostTopic from './components/PostTopic.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import ShowPosts from './components/ShowPosts.jsx'
import CreatePost from './components/CreatePost.jsx'
import { readAllTopic, readOneTopic, readAllPost, readOnePost, createPost, updatePost, destroyPost, putPostTopic, loginUser, registerUser, verifyUser, removeToken, findPostTopics } from './services/api-helper';
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
      selectedTopic: '',
      foundTopics: []
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

  handleRegisterButton = () => {
    this.props.history.push("/register")
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

  getPostItem = async (id) => {
    const postItem = await readOnePost(this.state.currentUser.id, id);
    this.setState({ postItem });
  }

  addPost = async () => {
    const newPost = await createPost(this.state.postFormData, this.state.currentUser.id)
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost],
      postFormData: {
        title: "",
        content: ""
      }
    }))
  }

  putPost = async (postItem) => {
    const updatedPostItem = await updatePost(this.state.postFormData, this.state.currentUser.id, postItem.id);
    this.setState(prevState => ({
      posts: prevState.posts.map(singlePost => {
        return singlePost.id === postItem.id ? updatedPostItem : singlePost
      })
    }))
  }


  deletePost = async (postItem) => {
    await destroyPost(this.state.currentUser.id, postItem.id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(singlePost => singlePost.id !== postItem.id)
    }))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      postFormData: {
        ...prevState.postFormData,
        [name]: value
      }
    }));
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
    const newPostItem = await putPostTopic(newTopic.id, postItem.id);
    this.setState({
      postItem: newPostItem
    })
  }

  findTopics = async (id) => {
    const foundTopics = await findPostTopics(id);
    this.setState({
      foundTopics
    });
  }

  topicForm = (e) => {
    this.setState({
      selectedTopic: e.target.value
    })
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser })
    this.props.history.push("/")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
    this.props.history.push("/")
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
    this.props.history.push("/")
  }

  handleSubmitPost = () => {
    this.props.history.push("/")
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
          <Link className="main_title_link" to="/"><h1>Mandalorian Diary App</h1></Link>
          {this.state.currentUser
            ?
            <div>
              <div className="welcome">Hi {this.state.currentUser.email && this.state.currentUser.first_name}!<button className="logout_button" onClick={this.handleLogout}>Logout</button></div>
              <Link className="nav_link" to="/posts">View All Posts</Link>
              &nbsp;
              <Link className="nav_link" to="/create-post">Create a New Post</Link>
              <hr />
            </div>
            :
            <div>
              <button className="auth_button" onClick={this.handleLoginButton}>Login</button>
              <button className="auth_button" onClick={this.handleRegisterButton}>Register</button>
            </div>
          }
        </header>
        <Route exact path="/login" render={(props) => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={(props) => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/posts" render={(props) => (
          <ShowPosts
            user={this.state.currentUser}
            posts={this.state.posts}
            formData={this.state.postFormData}
            foundTopics={this.state.foundTopics}
            getPosts={this.getPosts}
            getPostItem={this.getPostItem}
            deletePost={this.deletePost}
            handleSubmit={this.addPost}
            handleChange={this.handleChange}
            setPostForm={this.setPostForm}
            updatePost={this.putPost}
            findTopics={this.findTopics}
          />)} />
        <Route exact path="/create-post" render={(props) => (
          <CreatePost
            handleSubmitPost={this.handleSubmitPost}
            user={this.state.currentUser}
            posts={this.state.posts}
            formData={this.state.postFormData}
            getPostItem={this.getPostItem}
            deletePost={this.deletePost}
            handleSubmit={this.addPost}
            handleChange={this.handleChange}
            setPostForm={this.setPostForm}
            updatePost={this.updatePost}
          />)} />
        <Route path='/topics' render={() => (
          <PostsIndex
            posts={this.state.posts}
          />
        )} />
        <Route exact path="/posts/add-topic" render={(props) => (
          <PostTopic
            handleSubmitPost={this.handleSubmitPost}
            getTopics={this.getTopics}
            postItem={this.state.postItem}
            topics={this.state.topics}
            foundTopics={this.state.foundTopics}
            selectedTopic={this.state.selectedTopic}
            handleChange={this.topicForm}
            addTopicToPost={this.addTopicToPost} />)} />
      </div>
    );
  }

}

export default withRouter(App);
