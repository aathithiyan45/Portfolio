import React from 'react';
import './About.css';
import SocialLinks from '../components/SocialLinks';
import Achievements from "../components/Achievements";
import EducationSection from '../components/EducationCard';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Aathithiyan</h1>
          <h2>🎓 Information Technology student</h2>
          <h3 className="animated">Full-Stack Developer & UI/UX Designer</h3>
          <p>
            I'm passionate about building digital experiences that are both functional and user-friendly.
            Whether it's crafting smooth user interfaces or developing strong backend systems, I enjoy
            turning ideas into real, working applications.
          </p>
          <div className="cta-buttons">
          <a href="/experience" className="btn primary">View Experience</a>

      <a href="/contact" className="btn secondary">Contact Me</a>
    </div>
          <SocialLinks />
        </div>
        <div className="hero-image">
          <img src="profile.jpeg" alt="Aathithiyan" />
        </div>
      </section>

      {/* Divider */}
      <hr className="section-divider" />

      {/* Education Timeline */}
      
      <EducationSection />

       <hr className="section-divider" />
       <section className="achievements-section">
  <Achievements />
</section>
    </div>
    
  );
};

export default About;
