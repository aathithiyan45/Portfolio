import React, { useState } from 'react';
import './DevelopmentProjects.css';

const DevelopmentProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const projects = [
    {
      id: 1,
      title: "SmartSpend.AI",
      description: "AI-powered expense tracker with analytics dashboard.",
      category: "Full-Stack + AI/ML",
      image: "images/smartspend-dashboard.png",
      detailedDescription: "SmartSpend.AI is an intelligent expense manager that tracks spending, predicts categories using a trained ML model (Naive Bayes with scikit-learn), and provides insights with charts. Built using Django, Tailwind, and Chart.js.",
      technologies: ["Django", "Tailwind CSS", "Chart.js", "SQLite", "scikit-learn", "ReportLab"],
      features: [
        "Add, edit, and delete expenses",
        "AI-based automatic category prediction",
        "Analytics dashboard with charts",
        "Filter by date range",
        "Export to PDF & CSV",
        "Responsive Tailwind UI"
      ],
      codeLink: "https://github.com/aathithiyan45/smartspend-ai",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Translate App",
      description: "Multi-language translator powered by DeepL API.",
      category: "Full-Stack Development",
      image: "images/translate-app.png",
      detailedDescription: "A translation web app built with Django and templates. Integrates the DeepL API to deliver accurate translations across multiple languages. Frontend is built with HTML, CSS, and JavaScript.",
      technologies: ["Django", "DeepL API", "HTML", "CSS", "JavaScript"],
      features: [
        "Translate text across multiple languages",
        "Django backend with template rendering",
        "Responsive frontend with plain JS",
        "Translation history storage"
      ],
      codeLink: "https://github.com/aathithiyan45/translate_app",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Book Application",
      description: "Full-stack book management system with CRUD operations.",
      category: "Full-Stack (MERN-like)",
      image: "images/book-app.png",
      detailedDescription: "A full-stack Book Management App where users can browse, add, update, and delete books. React powers the frontend UI, while Node.js + Express handle backend APIs and MongoDB manages data.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      features: [
        "Add, update, delete books",
        "Manage book details (title, author, description)",
        "RESTful API with Express.js",
        "Responsive React frontend"
      ],
      codeLink: "https://github.com/aathithiyan45/book-application",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Macrocosm SFX",
      description: "Static editing portfolio for design & short films.",
      category: "Frontend Development",
      image: "images/macrocosm-sfx.png",
      detailedDescription: "Macrocosm SFX is a static personal editing portfolio built with pure HTML, CSS, and JavaScript. It showcases creative editing work such as short films and travel edits with a multi-page layout.",
      technologies: ["HTML", "CSS"],
      features: [
        "Multi-page static website",
        "Creative video showcase (short films, travel edits)",
        "Simple responsive design",
      ],
      codeLink: "https://github.com/aathithiyan45/aathithiyan45-Macrocosm-Sfx",
      liveLink: "https://aathithiyan45.github.io/aathithiyan45-Macrocosm-Sfx/"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio built with React and animations.",
      category: "Frontend Development",
      image: "images/portfolio-preview.png",
      detailedDescription: "My personal portfolio website built with React. It showcases my journey as a full-stack developer and UI/UX designer with sections for projects, skills, experience, and design work.",
      technologies: ["React", "CSS Animations", "Framer Motion", "Vercel"],
      features: [
        "Animated hero section",
        "Project showcase with slider/cards",
        "Responsive layout (light/dark mode)",
        "Integrated experience & skills sections"
      ],
      codeLink: "https://github.com/aathithiyan45/aathithiyan45",
      liveLink: "https://portfolio-aathithiyan.vercel.app"
    }
  ];

  const displayProject = hoveredProject !== null ? hoveredProject : currentProject;
  const currentProjectData = projects[displayProject];

  const handleProjectClick = (index) => {
    setCurrentProject(index);
    setShowDetails(true);
  };

  const handleBackClick = () => {
    setShowDetails(false);
  };

  return (
    <div className="development-projects-page">
      <div className="projects-container">
        
        {/* Left side - Project Image */}
        <div className="project-preview-section">
          <div className="project-preview-container">
            <img 
              src={currentProjectData.image}
              alt={currentProjectData.title}
              className="project-preview-image"
            />
            <div className="project-preview-caption">
              {currentProjectData.title}
            </div>
          </div>
        </div>

        {/* Right side - Project List or Details */}
        <div className="project-list-section">
          {!showDetails ? (
            <>
              {/* Title Section */}
              <div className="project-list-header">
                <h2 className="project-list-title">My Development Projects</h2>
                <p className="project-list-subtitle">
                  Showcasing real-world full-stack and design projects powered by AI, Django, React, and more.
                </p>
              </div>

              {/* Project List */}
              <div className="project-list-items">
                {projects.map((project, index) => (
                  <div 
                    key={project.id}
                    className={`project-list-item ${index === currentProject ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleProjectClick(index)}
                  >
                    <div className="project-list-info">
                      <p className="project-list-item-title">{project.title}</p>
                      <p className="project-list-item-subtitle">{project.description}</p>
                    </div>
                    <div className="project-list-category">
                      {project.category}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Project Details */
            <div className="project-details">
              <button className="back-button" onClick={handleBackClick}>
                ← Back to Projects
              </button>
              
              <div className="project-details-header">
                <h2 className="project-details-title">{currentProjectData.title}</h2>
                <span className="project-details-category">{currentProjectData.category}</span>
              </div>

              <div className="project-details-content">
                <div className="project-description">
                  <h3>About This Project</h3>
                  <p>{currentProjectData.detailedDescription}</p>
                </div>

                <div className="project-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {currentProjectData.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {currentProjectData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <a 
                    href={currentProjectData.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link code-link"
                  >
                    <span>View Code</span>
                  </a>
                  <a 
                    href={currentProjectData.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProjects;
