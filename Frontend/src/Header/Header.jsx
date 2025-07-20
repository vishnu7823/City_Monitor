import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import Firebase authentication
import { signOut } from "firebase/auth"; // Import signOut function
import "./Header.css";
import Footer from "../Footer/Footer";

function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const [user, setUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);

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

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      localStorage.removeItem("user");
      setUser(null);
      setShowLogout(false);
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const images = ["display1.jpg", "2img.jpg", "3img.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
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
          <img src='/logo.png' alt='City Monitor Logo' />
          <div className='right-container-navbar'>
            <Link to='/'>Home</Link>
            <Link to='/features'>Features</Link>
            <Link to={user ? "/analysis" : "/login-required"}>Analysis</Link>
            <Link to='/about'>About</Link>

            {user ? (
              <div className='dropdown'>
                <span className='username' onClick={toggleLogout}>
                  {user.fullName || user.email} {/* Show fullName or email */}
                </span>
                {showLogout && (
                  <span
                    onClick={handleLogout}
                    className={`logout-text ${showLogout ? "visible" : ""}`}
                  >
                    Logout
                  </span>
                )}
              </div>
            ) : (
              <Link to='/login'>
                <button>Login</button>
              </Link>
            )}
          </div>
        </nav>

        <div className='header-text'>
          <h2>Analysed, Summarised and Organized report of Smart Cities</h2>
          <Link to={user ? "/analysis" : "/login-required"}>
            <button>Wanna Try</button>
          </Link>
        </div>

        <div className='dec-img'>
          <img src='img1.png' alt='Decorative Illustration' />
        </div>

        <div className='slogan1'>
          <h2>Paving the Way for Smarter, Sustainable Cities</h2>
        </div>
        <h1 className='history-head'>Know About Our History</h1>

        <div className='display1'>
          <div className='container1'>
            <div className='sub-container1'>
              <Link to='/urban'>
                <img src='img1.png' alt='Urban Area Illustration' />
              </Link>
              <span className='hover-text'>Urban</span>
            </div>
            <div className='sub-container2'>
              <Link to='/rural'>
                <img src='img2.png' alt='Rural Area Illustration' />
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
