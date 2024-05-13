import React from 'react';
import './Login_css/login.css';
import login_bg from '../../images/login_bg.jpg'; 

function Login() {
  return (
    <div className="background-container">
      <img src={login_bg} className="background-img" alt="Background" />
      <div className='login-form'>
        <h2>Login</h2>
        <form >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button className='login'>Log in</button>
          <button className='signin'>Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;