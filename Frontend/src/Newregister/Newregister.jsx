import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Newregister.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const renderLink = process.env.REACT_APP_RENDER_LINK; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${renderLink}/api/register`,
        formData
      );
      alert(response.data.message); // Display success message
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Error registering user"); // Display backend error message if available, otherwise generic message
      console.error(error);
    }
  };

  return (
    <div className='register-container'>
      <div className='register-box'>
        <h1>Create Account</h1>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              placeholder='Enter your full name'
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Create a password'
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm your password'
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Register</button>
          <div className='login-link'>
            <p>
              Already have an account? <Link to='/login'> Login Here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
