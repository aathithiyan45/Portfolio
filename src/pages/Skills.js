import React, { useState } from 'react';
import './Skills.css';
import SocialLinks from '../components/SocialLinks';

const Skills = () => {
  const [category, setCategory] = useState('development');
  const [currentCard, setCurrentCard] = useState(0);
  
  const skillCards = {
    development: [
      {
        number: "01",
        title: "Frontend Development",
        description: "Building responsive and interactive web applications using React, Next.js, and modern JavaScript."
      },
      {
        number: "02",
        title: "Backend Development",
        description: "Creating robust server-side solutions with Node.js, Express, and database management."
      }
    ],
    design: [
      {
        number: "03",
        title: "UI/UX Design",
        description: "Crafting intuitive and engaging user interfaces with focus on user experience and accessibility."
      },
      {
        number: "04",
        title: "Tools & Technologies",
        description: "Utilizing modern design tools like Figma, Adobe XD, and following latest design principles."
      }
    ]
  };

  const handleCardClick = () => {
    setCurrentCard((prev) => (prev + 1) % skillCards[category].length);
  };

  return (
    <div className="skills-page">
      <div className="skills-section">
        <div className="hero-content">
          <h1>Our Vision,</h1>
          <h1>Our Creativity</h1>
          <h2>Building Digital Experiences That Matter!</h2>
          <p>
            I specialize in Full-Stack Development & UI/UX Design to
            craft seamless and high-performing web applications
          </p>
          <div className="cta-buttons">
            <a href="/projects" className="btn primary">View My Work</a>
            <a href="/contact" className="btn secondary">Get In Touch</a>
          </div>
          <SocialLinks />
        </div>
        
        <div className="skills-cards">
          <div className="card-nav">
            <div className="nav-line">
              <div 
                className={`nav-item ${category === 'development' ? 'active' : ''}`} 
                onClick={() => { setCategory('development'); setCurrentCard(0); }}
              >
                Development
              </div>
              <div 
                className={`nav-item ${category === 'design' ? 'active' : ''}`} 
                onClick={() => { setCategory('design'); setCurrentCard(0); }}
              >
                Design
              </div>
              <div className="nav-indicator"></div>
            </div>
          </div>
          <div className="skill-card" onClick={handleCardClick}>
            <span className="card-number">{skillCards[category][currentCard].number}</span>
            <h3>{skillCards[category][currentCard].title}</h3>
            <p>{skillCards[category][currentCard].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;