import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
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
         <Link to="/">Home</Link>
         <Link to="/features">Features</Link>
         <Link to="/analysis">Analysis</Link>
         <Link to="/about">About</Link>
          
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar