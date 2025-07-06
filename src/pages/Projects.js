import React, { useState } from 'react';
import './Projects.css';
import SocialLinks from '../components/SocialLinks';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectCards = [
    {
      number: "01",
      title: "SmartSpend.AI",
      description:
        "An AI-powered expense tracker that uses machine learning to categorize expenses, analyze trends, and provide intelligent financial insights.",
      technologies: [
        "Backend: Django (Python)",
        "Frontend: HTML, Tailwind CSS, Chart.js",
        "Database: SQLite (Development)",
        "ML Utilities: Scikit-learn, Tesseract OCR",
        "Exporting: ReportLab (PDF), CSV Writer"
      ],
      idea: "To help users manage their finances by intelligently tracking and analyzing spending patterns using AI, OCR, and visual dashboards.",
      image:
        "https://github.com/aathithiyan45/smartspend-ai/assets/141872222/98e8d7c7-85f1-49f7-8128-d090ebbf4a38",
      link: "https://github.com/aathithiyan45/smartspend-ai"
    },
    {
      number: "02",
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive, and animated portfolio website built using React. Designed to showcase my projects, resume, and contact form with a clean UI/UX.",
      technologies: [
        "Frontend: React.js",
        "Routing: React Router",
        "Styling: Custom CSS & Animations",
        "Forms: Formspree Integration",
        "Deployment: Vercel"
      ],
      idea:
        "To create a professional web presence that reflects my skills, showcases my work, and makes it easy for people to reach me.",
      image:
        "https://github.com/aathithiyan45/Portfolio/assets/141872222/fb0647e2-0ec6-42f2-89c6-77f65aa7dbb5", // Replace with your actual screenshot image URL if needed
      link: "portfolio-aathithiyan.vercel.app"
    },
    
    {
      number: "03",
      title: "Smart Book Manager",
      description:
        "A full-stack MERN application for managing personal book collections. Includes real-time barcode scanning to auto-fetch book details and full CRUD features.",
      technologies: [
        "Frontend: React.js, Tailwind CSS",
        "Backend: Node.js, Express.js",
        "Database: MongoDB",
        "Barcode Scanner: BSSN Scanner",
        "Features: Barcode Scan, CRUD, Search, Responsive UI"
      ],
      idea:
        "To streamline personal library management by allowing users to scan book barcodes, auto-fill details, and manage them with a user-friendly dashboard.",
      image:
        "https://github.com/aathithiyan45/book-application/assets/141872222/9e2ea154-63aa-4c60-a05d-3e92c180ae6d", // optional: your screenshot
      link: "https://github.com/aathithiyan45/book-application"
    },
    {
      number: "04",
      title: "Translate App – Real-Time Language Translator",
      description:
        "A Django-powered translation app that uses the DeepL API to convert text between multiple languages with high accuracy. Built with clean HTML templates and a user-friendly UI.",
      technologies: [
        "Backend: Django (Python)",
        "Frontend: HTML, CSS & JavaScript",
        "Translation API: DeepL",
        "Features: Real-time Translation, Copy to Clipboard, Clean UX"
      ],
      idea:
        "To offer users a fast, distraction-free, and highly accurate translation tool leveraging DeepL’s neural machine translation capabilities.",
      image:
        "https://github.com/aathithiyan45/translate_app/assets/141872222/2b1b54c5-418f-4075-95fb-419a66ad1dd2", // Optional: change to your screenshot
      link: "https://github.com/aathithiyan45/translate_app"
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
