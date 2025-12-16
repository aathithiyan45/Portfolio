import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [showThemeToggle, setShowThemeToggle] = useState(true); // ✅ NEW
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProjectsDropdown = (e) => {
    e.preventDefault();
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProjectsDropdownOpen(false);
  };

  /* ✅ Scroll behavior */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowThemeToggle(true); // at top
      } else if (currentScrollY > lastScrollY) {
        setShowThemeToggle(false); // scrolling down
      } else {
        setShowThemeToggle(true); // scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Outside click for dropdown */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProjectsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-components ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>
            <div className="nav-text">Home</div>
          </Link>
          <Link to="/about" className={`nav-item ${location.pathname === "/about" ? "active" : ""}`} onClick={closeMenu}>
            <div className="nav-text">About</div>
          </Link>
          <Link to="/skills" className={`nav-item ${location.pathname === "/skills" ? "active" : ""}`} onClick={closeMenu}>
            <div className="nav-text">Skills</div>
          </Link>

          <div className="nav-item nav-item-dropdown" ref={dropdownRef}>
            <div className="nav-text" onClick={toggleProjectsDropdown}>
              Projects
              <span className={`dropdown-arrow ${isProjectsDropdownOpen ? "open" : ""}`}>▼</span>
            </div>
            <div className={`dropdown-menu ${isProjectsDropdownOpen ? "open" : ""}`}>
              <Link to="/projects/development" className="dropdown-item" onClick={closeMenu}>Development</Link>
              <Link to="/projects/uiux" className="dropdown-item" onClick={closeMenu}>UI/UX</Link>
            </div>
          </div>

          <Link to="/contact" className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`} onClick={closeMenu}>
            <div className="nav-text">Contact</div>
          </Link>
        </div>

        {/* ✅ Theme Toggle with scroll fade */}
        <div className={`nav-right ${showThemeToggle ? "show" : "hide"}`}>
          <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
