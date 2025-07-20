import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Use REACT_APP_RENDER_LINK from your .env file
  const renderLink = process.env.REACT_APP_RENDER_LINK || 'http://localhost:5000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use full production base URL
      await axios.post(`${renderLink}/api/admin/login`, formData);
      localStorage.setItem('isAdmin', true);
      navigate('/admin'); // Redirect to admin dashboard
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <input
          type="text"
          name="username"
          placeholder="Admin Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Admin Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error-msg" style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
