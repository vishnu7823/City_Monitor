import React, { useState, useEffect }from "react";
import { InstagramOutlined ,FacebookOutlined,TwitterOutlined,LinkedinOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import Firebase authentication

import "./Footer.css";

function Footer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }

    // Firebase auth listener
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          fullName: firebaseUser.displayName, // Firebase stores name here
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL, // Profile picture
        });
        localStorage.setItem("user", JSON.stringify(firebaseUser)); // Save to localStorage
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);
  return (
    <footer className='footer'>
      <div className='footer-content'>
        {/* Column 1: Logo and Slogan */}
        <div className='footer-column'>
          <div className='footer-logo'>
            <a href='/' className='footer-logo-text'>
              CITY-MONITOR
            </a>
            <p className='footer-slogan'>
              Paving the Way for Smarter, Sustainable Cities
            </p>
          </div>
          <Link to='/feedback'>
            <button className='feedback-button'>Feedback</button>
          </Link>
        </div>

        {/* Column 2: Links */}
        <div className='footer-column footer-links'>
          <Link to='/'>Home</Link>
          <Link to='/features'>Features</Link>
          <Link to={user ? "/analysis" : "/login-required"}>Analysis</Link>
          <Link to='/about'>About</Link>
        </div>

        {/* Column 3: Contact Information, Social Media, Feedback */}
        <div className='footer-column footer-contact'>
          <p>Contact Us:</p>
          <p>Email: info@city-monitor.com</p>
          <p>Phone: +91 96294 52526</p>
          <p>Address: Lovely Professional University, Phagwara, Punjab</p>

          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookOutlined /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
          </div>
        </div>
      </div>

      <p className='footer-copyright'>
        © 2024 City Monitor. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
