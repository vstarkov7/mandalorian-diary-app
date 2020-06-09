import React from 'react';
import { Link } from 'react-router-dom';


const Login = (props) => {

  return (
    <div>
      <h2>Login</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <label className="login">Enter username</label>
        <input className="login" name="username" type="string" value={props.formData.username} onChange={props.handleChange} />
        <label className="login">Enter password</label>
        <input className="login" name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button className="login">Login</button>
        <Link className="register_link login" to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;