/*
Nama : Shinta Eldo Marpaung
NIM : 41424026
Prodi : D-IV TRPL
*/

import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { useAuth } from "./AuthContext";


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted', { username, password });
    login({ username });
    navigate('/Dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/Registration">Register here</Link>
      </p>
    </div>
  );
}

export default Login;