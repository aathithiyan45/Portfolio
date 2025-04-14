import React, { useState } from 'react';
import './Skills.css';
import SocialLinks from '../components/SocialLinks';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category] = useState('development');  // Removed setCategory since it's not used

  const skillCards = {
    development: [
      {
        number: "01",
        title: "UI/UX Design",
        description: "I focus on creating intuitive, user-friendly, and visually appealing interfaces.",
        skills: [
          "Wireframing & Prototyping (Figma, Adobe XD)",
          "User Research & Usability Testing",
          "Design Systems & Accessibility",
          "Responsive & Interactive UI Components"
        ],
        progress: 85
      },
      {
        number: "02",
        title: "Frontend Development",
        description: "I build dynamic, responsive, and interactive web applications using:",
        skills: [
          "HTML, CSS, JavaScript (ES6+)",
          "React.js (Learning & Implementing)",
          "Tailwind CSS & Bootstrap for Styling",
          "Flexbox & Grid for Layouts"
        ],
        progress: 75
      },
      {
        number: "03",
        title: "Backend Development",
        description: "I develop scalable and efficient backend systems with:",
        skills: [
          "Django (Python) - REST APIs, Authentication",
          "Database Management - PostgreSQL, SQLite",
          "Django ORM & CRUD Operations",
          "API Integration & Security Best Practices"
        ],
        progress: 70
      },
      {
        number: "04",
        title: "Tools & Technologies",
        description: "I use various tools to streamline my workflow:",
        skills: [
          "Version Control: Git, GitHub",
          "Project Management: Notion, Trello",
          "AI Tools: GitHub Copilot, Codeium, Chatgpt, Claude",
          "Automation & Deployment: Vercel, nelify, pythonanywhere"
        ],
        progress: 80
      }
    ]
  };

  const handlePrevious = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : skillCards[category].length - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev < skillCards[category].length - 1 ? prev + 1 : 0);
  };

  const currentCard = skillCards[category][currentIndex];

  return (
    <div className="skills-page">
      <div className="skills-section">
        <div className="hero-content">
          <h1>Our Vision,</h1>
          <h1>Our Creativity</h1>
          <h2>Creating Digital Solutions That Inspire!</h2>
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
          <div className="skill-cards-container">
            <div className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-number">{currentCard.number}</div>
                <div className="skill-card-nav">
                  <span className="nav-arrow" onClick={handlePrevious}>◀</span>
                  <span className="nav-arrow" onClick={handleNext}>▶</span>
                </div>
              </div>
              
              <h3 className="skill-card-title">{currentCard.title}</h3>
              <p className="skill-card-description">{currentCard.description}</p>
              
              <ul className="skill-card-list">
                {currentCard.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
              
              <div className="skill-card-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${currentCard.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;