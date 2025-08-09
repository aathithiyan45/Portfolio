import React from 'react';
import './CTAbuttons.css';

const CTAButtons = () => {
  return (
    <div className="cta-buttons">
      <a href="/projects" className="btn primary">View My Work</a>
      <a href="/contact" className="btn secondary">Contact Me</a>
    </div>
  );
};

export default CTAButtons;