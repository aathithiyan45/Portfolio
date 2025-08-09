import React, { useState } from 'react';
import './Projects.css';
import SocialLinks from '../components/SocialLinks';
import CTAButtons from '../components/CTAButtons';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectCards = [
    {
      number: "01",
      title: "SmartSpend.AI",
      description: "An AI-powered expense tracker that uses machine learning to categorize expenses, analyze trends, and provide intelligent financial insights.",
      technologies: [
        "Backend: Django (Python)",
        "Frontend: HTML, Tailwind CSS, Chart.js",
        "Database: SQLite (Development)",
        "ML Utilities: Scikit-learn, Tesseract OCR",
        "Exporting: ReportLab (PDF), CSV Writer"
      ]
    },
    {
      number: "02",
      title: "Personal Portfolio Website",
      description: "A modern, responsive, and animated portfolio website built using React. Designed to showcase my projects, resume, and contact form with a clean UI/UX.",
      technologies: [
        "Frontend: React.js",
        "Routing: React Router",
        "Styling: Custom CSS & Animations",
        "Forms: Formspree Integration",
        "Deployment: Vercel"
      ]
    },
    {
      number: "03",
      title: "Smart Book Manager",
      description: "A full-stack MERN application for managing personal book collections. Includes real-time barcode scanning to auto-fetch book details and full CRUD features.",
      technologies: [
        "Frontend: React.js, Tailwind CSS",
        "Backend: Node.js, Express.js",
        "Database: MongoDB",
        "Barcode Scanner: BSSN Scanner",
        "Features: Barcode Scan, CRUD, Search, Responsive UI"
      ]
    },
    {
      number: "04",
      title: "Translate App",
      description: "A Django-powered translation app that uses the DeepL API to convert text between multiple languages with high accuracy. Built with clean HTML templates and a user-friendly UI.",
      technologies: [
        "Backend: Django (Python)",
        "Frontend: HTML, CSS & JavaScript",
        "Translation API: DeepL",
        "Features: Real-time Translation, Copy to Clipboard, Clean UX"
      ]
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
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative digital solutions.
          </p>
          <CTAButtons />
          <SocialLinks />
        </div>

        <div className="project-cards">
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

            <div className="project-action-buttons">
              <span className="project-link disabled">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;