import React, { useState } from 'react';
import './Projects.css';
import SocialLinks from '../components/SocialLinks';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectCards = [
    {
      number: "01",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, featuring smooth animations and interactive components",
      technologies: [
        "React.js & React Router",
        "Custom CSS Animations",
        "Responsive Design",
        "Social Media Integration"
      ],
      status: 90,
      link: "https://github.com/AthiSelvan/Portfolio-2"
    },
    {
      number: "02",
      title: "Student Management System",
      description: "A comprehensive system for managing student data, attendance, and academic performance",
      technologies: [
        "Django & Python",
        "PostgreSQL Database",
        "RESTful APIs",
        "JWT Authentication"
      ],
      status: 85,
      link: "https://github.com/AthiSelvan/student-management"
    },
    {
      number: "03",
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive maps",
      technologies: [
        "React & Redux",
        "Weather API Integration",
        "Geolocation Services",
        "Chart.js Visualizations"
      ],
      status: 95,
      link: "https://github.com/AthiSelvan/weather-app"
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
            <a href="https://github.com/AthiSelvan" className="btn primary">GitHub Profile</a>
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