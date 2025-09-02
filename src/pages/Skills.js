import React, { useState } from 'react';
import './Skills.css';
import SocialLinks from '../components/SocialLinks';
import CTAButtons from '../components/CTAButtons';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skillCards = [
    {
      number: "01",
      title: "UI/UX Design",
      description: "I focus on creating intuitive, user-friendly, and visually appealing interfaces.",
      skills: [
        "Wireframing & Prototyping (Figma, Adobe XD)",
        "User Research & Usability Testing",
        "Design Systems & Accessibility",
        "Responsive & Interactive UI Components"
      ],
      certificate: {
        name: "UI/UX Design Certificate – Coding Ninjas",
        link: "https://certificate-link.com"
      }
    },
    {
      number: "02",
      title: "Frontend Development",
      description: "I build dynamic, responsive, and interactive web applications using:",
      skills: [
        "HTML, CSS, JavaScript (ES6+)",
        "React.js (Learning & Implementing)",
        "Tailwind CSS & Bootstrap for Styling",
        "Flexbox & Grid for Layouts"
      ],
      certificate: {
        name: "Frontend Bootcamp – Udemy",
        link: "https://frontend-cert.com"
      }
    },
    {
      number: "03",
      title: "Backend Development",
      description: "I develop scalable and efficient backend systems with:",
      skills: [
        "Django (Python) - REST APIs, Authentication",
        "Database Management - PostgreSQL, SQLite",
        "Django ORM & CRUD Operations",
        "API Integration & Security Best Practices"
      ],
      certificate: {
        name: "Django Backend Certificate – PythonAnywhere",
        link: "https://backend-cert.com"
      }
    },
    {
      number: "04",
      title: "Tools & Technologies",
      description: "I use various tools to streamline my workflow:",
      skills: [
        "Version Control: Git, GitHub",
        "Project Management: Notion, Trello",
        "AI Tools: GitHub Copilot, Codeium, ChatGPT, Claude",
        "Automation & Deployment: Vercel, Netlify, PythonAnywhere"
      ],
      certificate: {
        name: "Dev Tools & Deployment – Vercel Academy",
        link: "https://tools-cert.com"
      }
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : skillCards.length - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev < skillCards.length - 1 ? prev + 1 : 0);
  };

  const currentCard = skillCards[currentIndex];

  return (
    <div className="skills-page">
      <div className="skills-section">
        <div className="hero-content">
          <h1>My Vision,</h1>
          <h1>My Creativity</h1>
          <h2>Creating Digital Solutions That Inspire!</h2>
          <p>
            I specialize in Full-Stack Development & UI/UX Design to
            craft seamless and high-performing web applications
          </p>
          <CTAButtons />
          <SocialLinks />
        </div>

        <div className="skills-cards">
          <div className="skill-card">
            <div className="skill-card-header">
              <div className="skill-card-number">{currentCard.number}</div>
              <div className="skill-card-nav">
                <span className="nav-arrow" onClick={handlePrevious}>◀</span>
                <span className="nav-arrow" onClick={handleNext}>▶</span>
              </div>
            </div>

            <h3 className="skill-card-title">{currentCard.title}</h3>
            <p className="skill-card-description">{currentCard.description}</p>

            <ul className="skill-card-list">
              {currentCard.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <div className="certificate-section">
              🎓 Certificate: <a
                href={currentCard.certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                {currentCard.certificate.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;