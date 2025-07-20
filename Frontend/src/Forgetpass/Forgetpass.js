import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const renderLink = process.env.REACT_APP_RENDER_LINK;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${renderLink}/api/forgot-password`, {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error sending reset email.");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit'>Send Reset Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
