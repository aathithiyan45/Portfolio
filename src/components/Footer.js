import React from 'react';
import './Footer.css';
import { FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>Studio</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="/">Strategic Product Design</a></li>
            <li><a href="/">Growth Website Design</a></li>
            <li><a href="/">Free Consultation</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="/">Terms of Services</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      </div>

      <p className="footer-copy">© 2025 Aathithiyan</p>
    </footer>
  );
};

export default Footer;
