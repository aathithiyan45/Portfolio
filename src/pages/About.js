import React from 'react';
import './About.css';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <div className="about">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Aathithiyan</h1>
          <h2>Information Technology student</h2>
          <h3 className="animated">Full-Stack Developer & UI/UX Designer</h3>
          <p>
          I love building applications that are not only functional but also offer great user experiences. From turning ideas into interactive interfaces to developing powerful backend logic, I enjoy every part of the development process.
          </p>
          <div className="cta-buttons">
            <a href="/resume.pdf" className="btn primary" download>Download CV</a>
            <a href="/contact" className="btn secondary">Get In Touch</a>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-image">
          <img src="profile.jpeg" alt="Aathithiyan" />
        </div>
      </div>
    </div>
  );
};

export default About;