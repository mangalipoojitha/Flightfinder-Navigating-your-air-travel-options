import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/');
    } catch {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: 20 }}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required /><br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
