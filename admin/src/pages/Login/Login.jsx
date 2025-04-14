import React, { useState } from 'react';
import { useAuth } from '../../App';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/api/auth/login", {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      console.error("Login failed:", error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={handleLogin}>
          <p className='loginFormTextOne'>Admin Login</p>
          <label className="loginFormLabelOne">
            <p className="loginFormTextOneTextTwo inter">
              Username
            </p>
            <input
              className="loginFormLabelOneInput"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="loginFormLabelTwo">
            <p className="loginFormLabelTwoText inter">
              Password
            </p>
            <input
              className="loginFormLabelTwoInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="loginFormButton">
            <p className="loginFormButtonText">
              Login
            </p>
          </button>
        </form>
      </div>


    </div>
  );
};

export default Login;
