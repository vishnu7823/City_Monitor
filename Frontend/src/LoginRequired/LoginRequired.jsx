import React from "react";
import { Link } from "react-router-dom";
import "./LoginRequired.css"; // Add styles for this page

const LoginRequired = () => {
  return (
    <>    <div className="login-required-container">
      <h2>You need to log in to view the Analysis page.</h2>
      </div>
      <div className="login-required-button">
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
    </div>
    </>

  );
};

export default LoginRequired;
