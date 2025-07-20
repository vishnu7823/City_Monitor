import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams(); // Get token from URL
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const renderLink = process.env.REACT_APP_RENDER_LINK; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${renderLink}/api/reset-password/${token}`,
        { newPassword }
      );
      setMessage(response.data.message);
    } catch (error) {
        setMessage(error.response?.data?.message || "Error sending reset email.");
      }
      
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
