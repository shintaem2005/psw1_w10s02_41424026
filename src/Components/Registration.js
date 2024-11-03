/*
Nama : Shinta Eldo Marpaung
NIM : 41424026
Prodi : D-IV TRPL
*/

import { Link } from 'react-router-dom';
const { useState } = require("react");
const { useNavigate } = require("react-router-dom");

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Data username dan password dapat dikirimkan ke backend (API)
    console.log('Registration submitted:', {username, password});
    // untuk melakukan navigasi ke halaman login
    navigate('/Login');
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/Login">Login here</Link>
      </p>
    </div>
  );
}

export default Registration;