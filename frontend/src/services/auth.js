
import API from './api';

export const login = async (email, password) => {
  const res = await API.post('/users/login', { email, password });
  const { token } = res.data;
  localStorage.setItem('token', token);
  return res.data;
};

export const register = async (userData) => {
  return await API.post('/users/register', userData);
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};
