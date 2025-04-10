import React from 'react';
import './Home.css';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Aathithiyan</h1>
          <h2>Building Digital Experiences That Matter!</h2>
          <p>I specialize in Full-Stack Development & UI/UX Design to craft seamless and high-performing web applications</p>
          <div className="cta-buttons">
            <a href="/projects" className="btn primary">View My Work</a>
            <a href="/contact" className="btn secondary">Contact Me</a>
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

export default Home;