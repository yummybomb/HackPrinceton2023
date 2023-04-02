import React, { useState } from 'react';
import './assets/LoginPage.css'
import ImageScroll from './ImageScroll'

const LoginPage = () =>  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to handle login submission
  }

  return (
    <div>
      <ImageScroll></ImageScroll>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default LoginPage;
