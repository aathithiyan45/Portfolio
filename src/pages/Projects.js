import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
  <div className="projects-container">
    <h1 className="projects-title">My Projects</h1>
    <p className="projects-subtitle">
      Explore my work across development and UI/UX design
    </p>

    <div className="projects-options">
      <Link to="/projects/development" className="project-card">
        <h2>Development Projects</h2>
        <p>
          Full-stack applications, backend systems, APIs, and real-world
          problem solving using modern technologies.
        </p>
        <span className="project-cta">View Projects →</span>
      </Link>

      <Link to="/projects/uiux" className="project-card">
        <h2>UI / UX Projects</h2>
        <p>
          User-centered design, wireframes, case studies, and visual
          experiences crafted for usability.
        </p>
        <span className="project-cta">View Designs →</span>
      </Link>
    </div>
  </div>
</div>

  );
};

export default Projects;
