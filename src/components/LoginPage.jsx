import React from 'react';
import '../styles/Login.css';
import logo from '../assets/wanderwise-black.png'; 

function LoginPage({ onLogin }) {
  const handleLoginClick = (event) => {
    event.preventDefault();
    onLogin(); // Call the login function passed from App.js
  };

  return (
    <div className="login-container">
      <img src={logo} alt="WanderWise Logo" className="login-logo" />
      <h2>travel smart, travel wise</h2>
      <div className="login-box">
        <h3>Planning your travels has never been this easy, with WanderWise</h3>
        <p>Organize itineraries, find accommodation, and manage your travel budget all in one place!</p>
        <form onSubmit={handleLoginClick}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Log in</button>
        </form>
        <div className="links">
          <a href="/signup">Don't have an account? Sign up here</a>
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
