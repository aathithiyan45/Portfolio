import React, { useState } from 'react';
import './UIUXProjects.css';

const UIUXProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mobile Banking App",
      description: "Intuitive banking experience with seamless transactions and security.",
      category: "Mobile App Design",
      image: "/api/placeholder/600/400",
      behanceUrl: "https://www.behance.net/gallery/mobile-banking-app"
    },
    {
      id: 2,
      title: "SaaS Dashboard Design",
      description: "Clean, data-driven dashboard for business analytics and insights.",
      category: "Web App Design",
      image: "/api/placeholder/600/400",
      behanceUrl: "https://www.behance.net/gallery/saas-dashboard-design"
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description: "Engaging educational interface with interactive course modules.",
      category: "Web Design",
      image: "/api/placeholder/600/400",
      behanceUrl: "https://www.behance.net/gallery/elearning-platform"
    },
    {
      id: 4,
      title: "Food Delivery App",
      description: "User-friendly ordering experience with real-time tracking.",
      category: "Mobile App Design",
      image: "/api/placeholder/600/400",
      behanceUrl: "https://www.behance.net/gallery/food-delivery-app"
    },
    {
      id: 5,
      title: "Healthcare Portal",
      description: "Accessible patient portal with appointment booking and records.",
      category: "Web App Design",
      image: "/api/placeholder/600/400",
      behanceUrl: "https://www.behance.net/gallery/healthcare-portal"
    }
  ];

  const displayProject = hoveredProject !== null ? hoveredProject : currentProject;
  const currentProjectData = projects[displayProject];

  const handleProjectClick = (project) => {
    // Open Behance URL in a new tab
    window.open(project.behanceUrl, '_blank');
  };

  return (
    <div className="uiux-projects-page">
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

        {/* Right side - Project List */}
        <div className="project-list-section">
          {/* Title Section */}
          <div className="project-list-header">
            <h2 className="project-list-title">Crafting User Experiences</h2>
            <p className="project-list-subtitle">
              From concept to prototype, we design intuitive interfaces that delight users and drive engagement.
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
                                 onClick={() => handleProjectClick(project)}
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
        </div>
      </div>
    </div>
  );
};

export default UIUXProjects;