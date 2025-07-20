import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import axios from "axios";
import "./LoginPage.css";
import Navbar from "../Navbar/Navbar";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const renderLink = process.env.REACT_APP_RENDER_LINK; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${renderLink}/api/login`,
        formData
      );
      console.log(response.data);

      if (response.data.user) {
        // Check if the user is verified before allowing login
        if (response.data.user.isVerified) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        } else {
          alert("Please verify your email before logging in.");
          return;
        }

        // Store complete user data including fullName in localStorage
      }

      alert(response.data.message);
      navigate("/"); // Redirect to home page
      window.location.reload(); // Refresh to update Navbar
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Login Success:", user);

      // Prepare user data to send to the backend
      const userData = {
        fullName: user.displayName, // Adjust fields as needed
        email: user.email,
        // Add other fields like photoURL or uid if necessary
      };

      // Send Google user data to the backend to store in MongoDB
      await axios.post(
        `${renderLink}/api/google-login`,
        userData
      );

      // Save Google login user data in localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirect to home page
      window.location.href = "/";
    } catch (error) {
      window.location.href = "/";
      console.error("Google Login Error:", error);
      setError("Google login failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className='login-container'>
        <div className='login-box'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className='login-form'>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className='error'>{error}</p>}
            <button type='submit' className='log-butt'>
              Login
            </button>
            <div className='forgot-password'>
              <Link to='/forgot-password'>Forgot Password?</Link>
            </div>
            <div className='register-link'>
              <p>
                Don't have an account? <Link to='/register'>Register Here</Link>
              </p>
            </div>
            <div className='sign'>
              <button onClick={handleGoogleLogin}>Sign in with Google</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
