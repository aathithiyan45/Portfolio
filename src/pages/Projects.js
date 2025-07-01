import React, { useState } from 'react';
import './Projects.css';
import SocialLinks from '../components/SocialLinks';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectCards = [
    {
      number: "01",
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React, featuring smooth animations and interactive components",
      technologies: [
        "React.js & React Router",
        "Custom CSS Animations",
        "Responsive Design",
        "Social Media Integration"
      ],
      idea: "Showcase your personal projects and resume with a professional online presence.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      link: "https://github.com/AthiSelvan/Portfolio-2"
    },
    {
      number: "02",
      title: "Student Management System",
      description:
        "A comprehensive system for managing student data, attendance, and academic performance",
      technologies: [
        "Django & Python",
        "PostgreSQL Database",
        "RESTful APIs",
        "JWT Authentication"
      ],
      idea: "Provide schools with a centralized platform for managing students and records.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
      link: "https://github.com/AthiSelvan/student-management"
    },
    {
      number: "03",
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts and interactive maps",
      technologies: [
        "React & Redux",
        "Weather API Integration",
        "Geolocation Services",
        "Chart.js Visualizations"
      ],
      idea: "Enable users to check real-time weather and forecasts using data visualizations.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&auto=format",
      link: "https://github.com/AthiSelvan/weather-app"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projectCards.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projectCards.length - 1 ? prev + 1 : 0));
  };

  const currentProject = projectCards[currentIndex];

  return (
    <div className="projects-page">
      <div className="projects-section">
        {/* Hero Section */}
        <div className="hero-section">
  <div className="hero-content">
    <h1>My Projects</h1>
    <h2>Bringing Ideas to Life</h2>
    <p>
      Here are some of my recent projects that showcase my skills and
      passion for creating innovative digital solutions.
    </p>
  </div>

  <div className="social-links-container">
    <div className="cta-buttons">
      <a href="https://github.com/AthiSelvan" className="btn primary">
        GitHub Profile
      </a>
      <a href="/contact" className="btn secondary">
        Get In Touch
      </a>
    </div>
    <SocialLinks />
  </div>
</div>


        {/* Project Card Section */}
        <div className="project-cards">
          <div className="project-cards-container">
            <div className="project-card">
              <div className="project-info-section">
                <div className="project-card-header">
                  <div className="project-card-number">
                    {currentProject.number}
                  </div>
                  <div className="project-card-nav">
                    <span className="nav-arrow" onClick={handlePrevious}>
                      ◀
                    </span>
                    <span className="nav-arrow" onClick={handleNext}>
                      ▶
                    </span>
                  </div>
                </div>

                <h3 className="project-card-title">
                  {currentProject.title}
                </h3>
                <p className="project-card-description">
                  {currentProject.description}
                </p>

                <ul className="project-card-list">
                  {currentProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>

                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>

              <div className="project-idea-section">
                <h4>Project Idea</h4>
                <p className="project-card-idea">{currentProject.idea}</p>
                <div className="project-card-image">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="project-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
