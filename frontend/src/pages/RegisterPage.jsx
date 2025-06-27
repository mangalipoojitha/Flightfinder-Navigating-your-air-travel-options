import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async e => {
    e.preventDefault();
    try {
      await API.post('/users/register', form);
      alert('Registered successfully!');
      navigate('/login');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister} style={{ padding: 20 }}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br />
      <input name="email" placeholder="Email" onChange={handleChange} required /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
