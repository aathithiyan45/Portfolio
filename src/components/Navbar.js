import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showThemeToggle, setShowThemeToggle] = useState(true);

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

        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
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

          <Link
            to="/projects"
            className={`nav-item ${location.pathname.startsWith("/projects") ? "active" : ""}`}
            onClick={closeMenu}
          >
            <div className="nav-text">Projects</div>
          </Link>

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
            className="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;