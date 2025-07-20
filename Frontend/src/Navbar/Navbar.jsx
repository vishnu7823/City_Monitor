import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { auth } from "../firebaseConfig"; // Import Firebase authentication
import { signOut } from "firebase/auth"; // Import signOut function
import { Link } from "react-router-dom";

function Navbar() {
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

  return (
    <div className='head1'>
      <nav>
        <div className='logo-container'>
          <a className='logo' href='/'>
            CITY-MONITOR
          </a>
        </div>
        <img src='/logo.png' alt='logo' />
        <div className='right-container-navbar'>
          <Link to='/'>Home</Link>
          <Link to='/features'>Features</Link>
          <Link to={user ? "/analysis" : "/login-required"}>Analysis</Link>
          <Link to='/about'>About</Link>
          {/* <Link to="/admin-login" className="nav-link">Admin Login</Link> */}

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
    </div>
  );
}

export default Navbar;
