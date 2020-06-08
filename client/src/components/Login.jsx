import React from 'react';
import { Link } from 'react-router-dom';


const Login = (props) => {

  return (
    <div>
      <h2>login</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <input name="username" type="string" value={props.formData.username} onChange={props.handleChange} />
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;