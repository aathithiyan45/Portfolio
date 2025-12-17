import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    
    <div className="projects-page">
      <div>
      
      <div className="projects-container">
        
        
        <div className="projects-options">
          <Link to="/projects/development" className="project-card">
            <h2>Development</h2>
            <p>Full-stack applications and modern web development</p>
          </Link>

          <Link to="/projects/uiux" className="project-card">
            <h2>UI/UX Design</h2>
            <p>User-centered design and visual experiences</p>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;