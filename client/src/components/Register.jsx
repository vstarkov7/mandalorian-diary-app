import React from 'react';

const Register = (props) => {

  return (
    <div>
      <h2>Register</h2>
      <hr />
      <form onSubmit={props.handleRegister} >
        <label className="register">Enter username</label>
        <input className="register" name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <label className="register">Enter email</label>
        <input className="register" name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <label className="register">Enter First Name</label>
        <input className="register" name="first_name" type="text" value={props.formData.first_name} onChange={props.handleChange} />
        <label className="register">Enter Last Name</label>
        <input className="register" name="last_name" type="text" value={props.formData.last_name} onChange={props.handleChange} />
        <label className="register">Enter password</label>
        <input className="register" name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button className="register">Register</button>
      </form>
    </div>
  );
}

export default Register;
