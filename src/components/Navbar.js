import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button 
          className="menu-btn" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <div className="NavbarComponents">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <div className="nav-text">Home</div>
          </Link>
          <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <div className="nav-text">About</div>
          </Link>
          <Link to="/skills" className={`nav-item ${location.pathname === '/skills' ? 'active' : ''}`}>
            <div className="nav-text">Skill</div>
          </Link>
          <Link to="/projects" className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>
            <div className="nav-text">Project</div>
          </Link>
          <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <div className="nav-text">Contact</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;