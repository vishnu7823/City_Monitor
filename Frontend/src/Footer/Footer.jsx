import React from "react";
import { InstagramOutlined ,FacebookOutlined,TwitterOutlined,LinkedinOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
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
          <Link to='/analysis'>Analysis</Link>
          <Link to='/about'>About</Link>
        </div>

        {/* Column 3: Contact Information, Social Media, Feedback */}
        <div className='footer-column footer-contact'>
          <p>Contact Us:</p>
          <p>Email: info@city-monitor.com</p>
          <p>Phone: +91 96294 52526</p>
          <p>Address: Lovely Professional University, Phagwara, Punjab</p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FacebookOutlined /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a>
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
