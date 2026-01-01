import React, { useState } from 'react';
import './UIUXProjects.css';

const UIUXProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "NeuroHome Smart Home App",
      description: "Minimal smart home control app focused on clarity and intuitive interactions.",
      category: "Mobile App UI",
      image: "/images/neurohome-ui.png",
      behanceUrl: "https://www.behance.net/gallery/230197251/NeuroHome-A-Minimal-Smart-Home-Control-App-UIUX"
    },
    {
      id: 2,
      title: "Login & Sign-Up UI",
      description: "Clean and minimal authentication flow with strong visual hierarchy and smooth UX.",
      category: "Mobile App UI",
      image: "/images/login-signup-ui.png",
      behanceUrl: "https://lnkd.in/g5DMA8zN"
    },
    {
      id: 3,
      title: "Food Delivery App UI",
      description: "Fast and intuitive food ordering interface focused on clarity and user flow.",
      category: "Mobile App UI",
      image: "/images/food-delivery-ui.png",
      behanceUrl: "https://www.behance.net/"
    },
    {
      id: 4,
      title: "Hotel Booking Landing Page",
      description: "Conversion-focused landing page guiding users smoothly from browse to booking.",
      category: "Web UI Design",
      image: "/images/hotel-booking-ui.png",
      behanceUrl: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_conversion-focused-hotel-booking-landing-activity-7362726994540703744"
    },
    {
      id: 5,
      title: "E-Commerce Website UI",
      description: "Premium shopping experience crafted with strong layout, colors, and storytelling.",
      category: "Web UI Design",
      image: "/images/ecommerce-ui.png",
      behanceUrl: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_uidesign-frontendfinesse-figmadesign-activity-7328078112963866624"
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