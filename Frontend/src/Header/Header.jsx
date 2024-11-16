import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Footer from "../Footer/Footer";

function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "display1.jpg", // Image 1
    "2img.jpg", // Image 2
    "3img.jpg", // Image 3
  ];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  });

  return (
    <>
      <div className='header'>
        <nav>
          <div className='logo-container'>
            <a className='logo' href='/'>
              CITY-MONITOR
            </a>
          </div>
          <img src='/logo.png' alt='City Monitor Logo' /> {/* Updated alt */}
          <div className='right-container-navbar'>
            <Link to='/'>Home</Link>
            <Link to='/features'>Features</Link>
            <Link to='/analysis'>Analysis</Link>
            <Link to='/about'>About</Link>

            <Link to='/login'>
              <button className='home-log-button'>Login</button>
            </Link>
          </div>
        </nav>
        <div className='header-text'>
          <h2>
            Analysed, Summarised and
            <br /> Organized report of Smart Cities
          </h2>
          <Link to='/analysis'>
            <button>Wanna Try</button>
          </Link>
        </div>
        <div className='dec-img'>
          <img src='img1.png' alt='Decorative Illustration' /> {/* Updated alt */}
        </div>

        <div className='slogan1'>
          <h2>Paving the Way for Smarter, Sustainable Cities</h2>
        </div>
        <h1 className='history-head'>Know About Our History</h1>

        <div className='display1'>
          <div className='container1'>
            <div className='sub-container1'>
              <Link to='/urban'>
                <img src='img1.png' alt='Urban Area Illustration' className='hover-image1' /> {/* Updated alt */}
              </Link>
              <span className='hover-text'>Urban</span>
            </div>
            <div className='sub-container2'>
              <Link to='/rural'>
                <img src='img2.png' alt='Rural Area Illustration' className='hover-image2' /> {/* Updated alt */}
              </Link>
              <span className='hover-text'>Rural</span>
            </div>
          </div>
        </div>

        {/* Slideshow */}
        <div className='dashboard'>
          <div className='display'>
            <img
              src={images[currentImage]}
              alt={`Slide ${currentImage + 1}`} 
              className='slideshow-image'
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Header;
