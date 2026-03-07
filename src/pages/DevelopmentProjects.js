import React, { useState } from 'react';
import './DevelopmentProjects.css';


const DevelopmentProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const projects = [
    {
      id: 1,
      title: "AI Adaptive Learning System",
      description: "AI-powered platform that personalizes learning based on student engagement.",
      category: "Full-Stack + AI/ML",
      image: "/images/ai-learning.png",
      detailedDescription: "AI Adaptive Learning System is an intelligent education platform that analyzes student engagement and dynamically adapts learning content in real time. The frontend is built with React while Django powers the backend APIs and AI logic for personalized learning.",
      technologies: ["React", "Django", "Python", "Machine Learning", "REST API"],
      features: [
        "AI-powered personalized learning",
        "Student engagement tracking",
        "Dynamic learning content adaptation",
        "Interactive learning dashboard",
        "Django backend with AI processing"
      ],
      codeLink: "https://github.com/aathithiyan45/ai-adaptive-learning",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Potato Disease Classifier",
      description: "Deep learning model that classifies potato diseases using EfficientNet-B0.",
      category: "Deep Learning + Computer Vision",
      image: "/images/potato-classifier.png",
      detailedDescription: "Potato Disease Classifier is a deep learning-based image classification system built with PyTorch and EfficientNet-B0. The model is trained on a potato dataset and integrated with a Django web application to allow real-time image uploads and disease prediction.",
      technologies: ["Python", "PyTorch", "EfficientNet-B0", "Django", "Computer Vision"],
      features: [
        "Deep learning image classifier using EfficientNet-B0",
        "Image preprocessing and augmentation",
        "Model training with PyTorch",
        "Django web interface for predictions",
        "Upload potato images and get disease classification"
      ],
      codeLink: "https://github.com/aathithiyan45/Potato-Classifier",
      liveLink: "#"
    },
    {
      id: 3,
      title: "SmartSpend.AI",
      description: "AI-powered expense tracker with analytics dashboard.",
      category: "Full-Stack + AI/ML",
      image: "/images/spendai.png",
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
      id: 4,
      title: "Translate App",
      description: "Multi-language translator powered by DeepL API.",
      category: "Full-Stack Development",
      image: "/images/Translate.png",
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
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio built with React and animations.",
      category: "Frontend Development",
      image: "/images/portfolio.png",
      detailedDescription: "My personal portfolio website built with React. It showcases my journey as a full-stack developer and UI/UX designer with sections for projects, skills, experience, and design work.",
      technologies: ["React", "CSS Animations", "Framer Motion", "Vercel"],
      features: [
        "Animated hero section",
        "Project showcase with slider/cards",
        "Responsive layout (light/dark mode)",
        "Integrated experience & skills sections"
      ],
      codeLink: "https://github.com/aathithiyan45/Portfolio",
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
            <div className="project-preview-frame">
              <img
                key={currentProjectData.image}
                src={currentProjectData.image}
                alt={currentProjectData.title}
                className="project-preview-image fade-image"
              />
            </div>
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