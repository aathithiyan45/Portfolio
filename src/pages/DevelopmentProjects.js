import React, { useState } from 'react';
import './DevelopmentProjects.css';

const DevelopmentProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Scalable online store with modern UI and smooth checkout.",
      category: "Full-Stack Development",
      image: "images/smartspend-dashboard.png",
      detailedDescription: "A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard. The platform supports multiple payment gateways and provides real-time order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT Authentication", "Redux"],
      features: [
        "User authentication and authorization",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Real-time inventory management",
        "Order tracking and history",
        "Admin dashboard with analytics"
      ],
      codeLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://ecommerce-demo.vercel.app"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Organize tasks with real-time team collaboration.",
      category: "Frontend Development",
      image: "/api/placeholder/600/400",
      detailedDescription: "A collaborative task management application that enables teams to organize, track, and complete projects efficiently. Built with modern frontend technologies and real-time synchronization capabilities.",
      technologies: ["React", "Socket.io", "Material-UI", "Firebase", "Redux Toolkit"],
      features: [
        "Real-time task updates and notifications",
        "Team collaboration and commenting",
        "Drag-and-drop task organization",
        "Project timeline and deadline tracking",
        "File attachments and document sharing",
        "Advanced filtering and search"
      ],
      codeLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://taskmanager-demo.netlify.app"
    },
    {
      id: 3,
      title: "RESTful API Backend",
      description: "Secure, scalable backend APIs with authentication.",
      category: "Backend Development",
      image: "/api/placeholder/600/400",
      detailedDescription: "A robust RESTful API backend service designed for scalability and security. Implements best practices for API design, authentication, and data management with comprehensive documentation.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Swagger", "Docker"],
      features: [
        "RESTful API design principles",
        "JWT-based authentication system",
        "Rate limiting and security middleware",
        "Database optimization and indexing",
        "Comprehensive API documentation",
        "Automated testing and CI/CD pipeline"
      ],
      codeLink: "https://github.com/yourusername/restful-api",
      liveLink: "https://api-docs-demo.herokuapp.com"
    },
    {
      id: 4,
      title: "Weather Analytics Dashboard",
      description: "Interactive weather forecasts with visual charts.",
      category: "Frontend Development",
      image: "/api/placeholder/600/400",
      detailedDescription: "An interactive weather analytics dashboard that visualizes weather data through beautiful charts and graphs. Provides detailed forecasts, historical data analysis, and weather pattern insights.",
      technologies: ["Vue.js", "D3.js", "Chart.js", "OpenWeather API", "Vuex", "Tailwind CSS"],
      features: [
        "Interactive weather charts and graphs",
        "7-day weather forecast display",
        "Historical weather data analysis",
        "Location-based weather tracking",
        "Weather alerts and notifications",
        "Responsive design for all devices"
      ],
      codeLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://weather-analytics-demo.vercel.app"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "Fast messaging with file sharing and reactions.",
      category: "Full-Stack Development",
      image: "/api/placeholder/600/400",
      detailedDescription: "A modern real-time chat application with advanced messaging features. Supports group chats, file sharing, message reactions, and multimedia content with end-to-end encryption capabilities.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary", "JWT"],
      features: [
        "Real-time messaging with Socket.io",
        "Group chat and private messaging",
        "File and image sharing capabilities",
        "Message reactions and emoji support",
        "User presence and typing indicators",
        "Message encryption and security"
      ],
      codeLink: "https://github.com/yourusername/chat-application",
      liveLink: "https://realtime-chat-demo.netlify.app"
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
                <h2 className="project-list-title">Building Scalable Software</h2>
                <p className="project-list-subtitle">
                  From backend to full-stack, we build secure, high-performance solutions for growth.
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m18 13 6-6-6-6"/>
                      <path d="m6 11 6-6-6-6"/>
                    </svg>
                  </a>
                  <a 
                    href={currentProjectData.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <span>Live Demo</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" x2="21" y1="14" y2="3"/>
                    </svg>
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