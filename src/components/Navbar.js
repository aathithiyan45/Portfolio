import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showThemeToggle, setShowThemeToggle] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /* Scroll behavior */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowThemeToggle(true);
      } else if (currentScrollY > lastScrollY) {
        setShowThemeToggle(false);
      } else {
        setShowThemeToggle(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <button
          className={`menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-components ${isMenuOpen ? "open" : ""}`}>

          <Link
            to="/"
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <div className="nav-text">Home</div>
          </Link>

          <Link
            to="/about"
            className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <div className="nav-text">About</div>
          </Link>

          <Link
            to="/skills"
            className={`nav-item ${location.pathname === "/skills" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <div className="nav-text">Skills</div>
          </Link>

          <div
            className={`nav-item nav-item-dropdown ${location.pathname.startsWith("/projects") ? "active" : ""}`}
            onMouseEnter={() => window.innerWidth > 768 && setIsDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setIsDropdownOpen(false)}
          >
            <div 
              className="nav-text" 
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                if (isMenuOpen) {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
            >
              Projects <span className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}>▼</span>
            </div>

            <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
              <Link
                to="/projects/development"
                className={`dropdown-item ${location.pathname === "/projects/development" ? "active" : ""}`}
                onClick={() => {
                  setIsDropdownOpen(false);
                  closeMenu();
                }}
              >
                Development
              </Link>
              <Link
                to="/projects/uiux"
                className={`dropdown-item ${location.pathname === "/projects/uiux" ? "active" : ""}`}
                onClick={() => {
                  setIsDropdownOpen(false);
                  closeMenu();
                }}
              >
                UI/UX
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <div className="nav-text">Contact</div>
          </Link>

        </div>

        <div className={`nav-right ${showThemeToggle ? "show" : "hide"}`}>
          <button
            className={`theme-toggle-switch ${darkMode ? "dark" : "light"}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            <span className="switch-text day-text">DAYMODE</span>
            <span className="switch-text night-text">NIGHTMODE</span>
            <div className="switch-thumb">
              {darkMode ? (
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="#0E1011" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-moon">
                  <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 0-.21-1.79A6.75 6.75 0 1 1 13.79 3.21 9.75 9.75 0 0 0 12 3z" />
                  <path d="M19 2v3M17.5 3.5h3" strokeWidth="1.5" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="#0E1011" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-sun">
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </div>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;