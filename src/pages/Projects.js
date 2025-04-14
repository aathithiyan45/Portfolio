import React, { useState } from 'react';
import './Projects.css';
import SocialLinks from '../components/SocialLinks';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectCards = [
    {
      number: "01",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React",
      technologies: [
        "React.js & React Router",
        "CSS3 Animations & Transitions",
        "Responsive Design",
        "Custom Components"
      ],
      status: 90,
      link: "https://github.com/yourusername/portfolio"
    },
    {
      number: "02",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication",
      technologies: [
        "Django Backend API",
        "PostgreSQL Database",
        "Payment Integration",
        "Admin Dashboard"
      ],
      status: 85,
      link: "https://github.com/yourusername/ecommerce"
    },
    {
      number: "03",
      title: "Task Management App",
      description: "A collaborative task management application",
      technologies: [
        "React & Redux",
        "Real-time Updates",
        "User Authentication",
        "Task Analytics"
      ],
      status: 75,
      link: "https://github.com/yourusername/taskmanager"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : projectCards.length - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev < projectCards.length - 1 ? prev + 1 : 0);
  };

  const currentProject = projectCards[currentIndex];

  return (
    <div className="projects-page">
      <div className="projects-section">
        <div className="hero-content">
          <h1>My Projects</h1>
          <h2>Bringing Ideas to Life</h2>
          <p>
            Here are some of my recent projects that showcase my skills
            and passion for creating innovative digital solutions.
          </p>
          <div className="cta-buttons">
            <a href="https://github.com/yourusername" className="btn primary">GitHub Profile</a>
            <a href="/contact" className="btn secondary">Get In Touch</a>
          </div>
          <SocialLinks />
        </div>
        
        <div className="project-cards">
          <div className="project-cards-container">
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-number">{currentProject.number}</div>
                <div className="project-card-nav">
                  <span className="nav-arrow" onClick={handlePrevious}>◀</span>
                  <span className="nav-arrow" onClick={handleNext}>▶</span>
                </div>
              </div>
              
              <h3 className="project-card-title">{currentProject.title}</h3>
              <p className="project-card-description">{currentProject.description}</p>
              
              <ul className="project-card-list">
                {currentProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              
              <div className="project-card-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${currentProject.status}%` }}
                ></div>
              </div>
              
              <a 
                href={currentProject.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;