import React, { useState, setError } from 'react';
import './assets/LoginPage.css'
import ImageScroll from './ImageScroll'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';


const LoginPage = () =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set('username', email);
    formData.set('password', password);
    try {
        await axios.post('http://localhost:8000/auth/jwt/login', 
        formData, 
        {
            headers: {
                'Content-Type' : 'multipart/form-data' 
            },
        },
        )
        alert('Login successful');
        navigate('/generate');
      } catch (err) {
        alert('Login failed');
        setError(err.response.data.error);
      }
    }
    

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8000/auth/register', { "email" : email, "password" : password});
      alert('User registered successfully');
    } catch (err) {
        alert('User registered failed');
      setError(err.response.data.error);
    }
  }

  return (
    <div>
      <ImageScroll/>
      <form>
        <label>
          <h1>Email:</h1>
          <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          <h1>Password:</h1>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button onClick = {handleLogin}>LOGIN</button>
        <button onClick = {handleRegister}>REGISTER</button>
      </form>
    </div>
  )
}

export default LoginPage;
