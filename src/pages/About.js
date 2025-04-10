import React from 'react';
import './About.css';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h1>About Me</h1>
            <h2>Full-Stack Developer & UI/UX Designer</h2>
            <p>
              I'm a passionate Full Stack Developer and Creative Designer from Tamil Nadu. I specialize in crafting clean, user-centric web applications with a strong focus on both backend logic and frontend aesthetics.
            </p>
            <p>
              Currently pursuing my degree in Information Technology, I have hands-on experience in building real-time projects using Django, React, and modern UI/UX tools like Figma. I believe in continuous learning, clean code, and solving real-world problems with technology.
            </p>
            <p>
              When I'm not coding, I love designing interfaces, editing videos, and exploring new tools that boost productivity and creativity.
            </p>

            <div className="personal-info">
              <div className="info-item">
                <span>Full Name:</span>
                <p>Aathithiyan P</p>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <p>aathithiyan45@gmail.com</p>
              </div>
              <div className="info-item">
                <span>Location:</span>
                <p>Tamil Nadu, India</p>
              </div>
              <div className="info-item">
                <span>Languages:</span>
                <p>English, Tamil</p>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="/contact" className="btn primary">Get In Touch</a>
              <a href="/resume.pdf" className="btn secondary" download>Download CV</a>
            </div>
            <SocialLinks />
          </div>
          <div className="about-image">
            <img src="/profile.jpeg" alt="Aathithiyan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;