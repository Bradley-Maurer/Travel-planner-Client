import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../assets/wanderwise.png'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getNavbarStyle = () => {
    switch (location.pathname) {
      case '/home':
        return 'navbar navbar-home';
      case '/plan':
        return 'navbar navbar-plan';
      case '/budget':
        return 'navbar navbar-budget';
      default:
        return 'navbar';
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={getNavbarStyle()}>
      <div className="navbar-brand">
      <Link to="/">
          <img src={logo} alt="WanderWise Logo" className="navbar-logo" />
        </Link>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/plan" onClick={() => setIsOpen(false)}>Plan your trip</Link>
        </li>
        <li>
          <Link to="/budget" onClick={() => setIsOpen(false)}>Track budget</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


