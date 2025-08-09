import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProjectsDropdown = (e) => {
    e.preventDefault();
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProjectsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProjectsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isProjectsActive = location.pathname.includes("/projects");

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
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
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            <div className="nav-text">About</div>
          </Link>

          <Link
            to="/skills"
            className={`nav-item ${
              location.pathname === "/skills" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            <div className="nav-text">Skills</div>
          </Link>

          <div className="nav-item nav-item-dropdown" ref={dropdownRef}>
            <div className="nav-text" onClick={toggleProjectsDropdown}>
              Projects
              <span
                className={`dropdown-arrow ${
                  isProjectsDropdownOpen ? "open" : ""
                }`}
              >
                ▼
              </span>
            </div>
            <div
              className={`dropdown-menu ${
                isProjectsDropdownOpen ? "open" : ""
              }`}
            >
              <Link
                to="/projects/development"
                className={`dropdown-item ${
                  location.pathname === "/projects/development" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Development
              </Link>
              <Link
                to="/projects/uiux"
                className={`dropdown-item ${
                  location.pathname === "/projects/uiux" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                UI/UX
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className={`nav-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            <div className="nav-text">Contact</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
