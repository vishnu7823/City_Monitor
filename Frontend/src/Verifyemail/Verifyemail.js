import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const renderLink = process.env.REACT_APP_RENDER_LINK;
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    axios
      .get(`${renderLink}/api/verify-email/${token}`)
      .then((response) => {
        setMessage(response.data.message);
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((error) => {
        setMessage("Invalid or expired token.");
      });
  }, [token, navigate]); // No need to add renderLink here
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div className='verify-container'>
      <h2>{message}</h2>
    </div>
  );
};

export default VerifyEmail;
