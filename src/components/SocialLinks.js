import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/aathithiyan-p-7a6b692a3/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/aathithiyan45" target="_blank" rel="noopener noreferrer" className="social-icon github">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/unique_lover_45/?__pwa=1" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.figma.com/files/team/1439977738552784288/recents-and-sharing?fuid=1439977736845671965" target="_blank" rel="noopener noreferrer" className="social-icon figma">
        <i className="fab fa-figma"></i>
      </a>
      <a href="https://www.behance.net/aathithaathith1" target="_blank" rel="noopener noreferrer" className="social-icon behance">
        <i className="fab fa-behance"></i>
      </a>
    </div>
  );
};

export default SocialLinks;