import React, { useState } from 'react';
import './Projects.css';
import SocialLinks from '../components/SocialLinks';


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

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
      image: "images/smartspend-dashboard.png",
      githubLink: "https://github.com/aathithiyan45/smartspend-ai",
      liveDemo: null,
      status: "Repository"
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
        "To build a responsive React-based portfolio that professionally showcases my projects, skills, and contact options with clean design and smooth UX.",
      image: "images/Portfolio.png",
      githubLink: "https://github.com/aathithiyan45/portfolio",
      liveDemo: "https://portfolio-aathithiyan.vercel.app",
      status: "Both"
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
        "https://github.com/aathithiyan45/book-application/assets/141872222/9e2ea154-63aa-4c60-a05d-3e92c180ae6d",
      githubLink: "https://github.com/aathithiyan45/book-application",
      liveDemo: null,
      status: "Repository"
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
        "To offer users a fast, distraction-free, and highly accurate translation tool leveraging DeepL's neural machine translation capabilities.",
      image:
        "https://github.com/aathithiyan45/translate_app/assets/141872222/2b1b54c5-418f-4075-95fb-419a66ad1dd2",
      githubLink: "https://github.com/aathithiyan45/translate_app",
      liveDemo: null,
      status: "Repository"
    }
  ];

  const handlePrevious = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projectCards.length - 1));
      setIsAnimating(false);
    }, 400);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev < projectCards.length - 1 ? prev + 1 : 0));
      setIsAnimating(false);
    }, 400);
  };

  const currentProject = projectCards[currentIndex];

  const ProjectActionButtons = ({ project }) => {
    const hasLiveDemo = project.liveDemo && project.liveDemo.trim() !== '';
    const hasGithubLink = project.githubLink && project.githubLink.trim() !== '';

    return (
      <div className="project-action-buttons">
        {hasLiveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-demo"
          >
            Live Demo
          </a>
        )}
        {hasGithubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            Source Code
          </a>
        )}
        {!hasLiveDemo && !hasGithubLink && (
          <span className="project-link disabled">
            Coming Soon
          </span>
        )}
      </div>
    );
  };

    return (
    <div className="projects-page">
      {/* 💡 Project Intro */}
      <div className="projects-section">
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

        {/* 💻 Project Cards */}
        <div className="project-cards">
          <div className="project-cards-container">
            <div className={`project-card fade-${direction} ${isAnimating ? 'animating' : ''}`} key={currentProject.number}>
              <div className="project-info-section">
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

                <ProjectActionButtons project={currentProject} />
              </div>

              <div className="project-idea-section">
                <h4>Project Idea</h4>
                <p className="project-card-idea">{currentProject.idea}</p>
                <div className="project-card-image">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
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
