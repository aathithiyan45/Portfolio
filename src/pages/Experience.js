import React, { useState } from 'react';
import './Experience.css';
import SocialLinks from '../components/SocialLinks';
import CTAButtons from '../components/CTAButtons';

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experienceCards = [
    {
      number: "01",
      role: "UI/UX Designer Intern",
      company: "ABC Designs",
      duration: "Jan 2024 - Mar 2024",
      description: "Focused on creating user-centric designs and improving user experience:",
      details: [
        "Worked on wireframing and prototyping in Figma",
        "Designed responsive UI components",
        "Collaborated with developers for design handoff",
        "Conducted user research and usability testing"
      ],
      certificate: {
        name: "UI/UX Design Internship Certificate – ABC Designs",
        link: "https://certificate-link.com"
      }
    },
    {
      number: "02",
      role: "Full-Stack Developer Intern",
      company: "XYZ Solutions",
      duration: "Jun 2024 - Aug 2024",
      description: "Developed end-to-end web applications and improved system performance:",
      details: [
        "Developed full-stack web apps with React & Django",
        "Implemented authentication & API integrations",
        "Improved website performance by 30%",
        "Built RESTful APIs and database optimization"
      ],
      certificate: {
        name: "Full-Stack Development Certificate – XYZ Solutions",
        link: "https://fullstack-cert.com"
      }
    },
    {
      number: "03",
      role: "Frontend Developer",
      company: "Tech Innovators",
      duration: "Sep 2024 - Dec 2024",
      description: "Built modern, responsive web interfaces with focus on performance:",
      details: [
        "Developed interactive React.js applications",
        "Implemented responsive designs with Tailwind CSS",
        "Optimized web performance and accessibility",
        "Collaborated in agile development environment"
      ],
      certificate: {
        name: "Frontend Excellence Award – Tech Innovators",
        link: "https://frontend-award.com"
      }
    },
    {
      number: "04",
      role: "Project Lead",
      company: "Digital Solutions Hub",
      duration: "Jan 2025 - Present",
      description: "Leading cross-functional teams to deliver high-quality digital products:",
      details: [
        "Managing end-to-end project delivery cycles",
        "Coordinating between design and development teams",
        "Client communication and requirement analysis",
        "Code review and quality assurance processes"
      ],
      certificate: {
        name: "Project Management Certificate – Digital Solutions Hub",
        link: "https://project-cert.com"
      }
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : experienceCards.length - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev < experienceCards.length - 1 ? prev + 1 : 0);
  };

  const currentCard = experienceCards[currentIndex];

  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-hero">
          <h1>My Journey,</h1>
          <h1>My Growth</h1>
          <h2>Professional Experiences That Define Me!</h2>
          <p>
            I've gained hands-on experience working on real-world projects,
            collaborating with teams, and solving problems with design & code
          </p>
          <div className="experience-cta">
            <CTAButtons />
          </div>
          <SocialLinks />
        </div>

        <div className="experience-cards">
          <div className="experience-card">
            <div className="experience-card-header">
              <div className="experience-card-number">{currentCard.number}</div>
              <div className="experience-card-nav">
                <span className="experience-nav-arrow" onClick={handlePrevious}>◀</span>
                <span className="experience-nav-arrow" onClick={handleNext}>▶</span>
              </div>
            </div>

            <h3 className="experience-card-title">{currentCard.role}</h3>
            <p className="experience-company">@ {currentCard.company}</p>
            <p className="experience-duration">{currentCard.duration}</p>
            <p className="experience-card-description">{currentCard.description}</p>

            <ul className="experience-card-list">
              {currentCard.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            <div className="experience-certificate">
              🎓 Certificate: <a
                href={currentCard.certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-certificate-link"
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

export default Experience;
