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
      localStorage.setItem('token', token); // Store the token in localStorage
      setIsAuthenticated(true);
      navigate('/'); // Redirect to home after login
    } catch (error) {
      console.error("Login failed:", error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
