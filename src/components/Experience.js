import React, { useState } from 'react';
import './Experience.css'; // Import the CSS file

const ExperiencePage = () => {
  const experiences = [
    {
      number: "01",
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "Jan 2023 - Present",
      description: "Leading full-stack development projects with modern technologies, mentoring junior developers, and architecting scalable web applications.",
      achievements: [
        "Built 5+ enterprise-level applications serving 10,000+ users",
        "Reduced application load time by 40% through optimization",
        "Mentored team of 6 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Led migration from legacy systems to modern architecture"
      ]
    },
    {
      number: "02", 
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      period: "Jun 2021 - Dec 2022",
      description: "Developed responsive web applications using React, Node.js, and cloud services. Collaborated with cross-functional teams to deliver high-quality products.",
      achievements: [
        "Developed 15+ responsive web applications",
        "Integrated third-party APIs and payment gateways",
        "Improved code quality through unit testing (95% coverage)",
        "Collaborated with UX/UI teams for optimal user experience",
        "Participated in agile development methodologies"
      ]
    },
    {
      number: "03",
      title: "Frontend Developer",
      company: "StartupHub Inc",
      period: "Mar 2020 - May 2021", 
      description: "Focused on creating intuitive user interfaces and enhancing user experience across multiple web platforms using modern frontend technologies.",
      achievements: [
        "Created pixel-perfect UI components from Figma designs",
        "Implemented responsive design for mobile-first approach",
        "Optimized web performance achieving 95+ Lighthouse scores",
        "Built reusable component library used across 8 projects",
        "Collaborated with backend team for seamless API integration"
      ]
    },
    {
      number: "04",
      title: "Junior Web Developer",
      company: "WebCraft Agency",
      period: "Sep 2019 - Feb 2020",
      description: "Started my journey as a web developer, learning industry best practices and contributing to client projects while building foundational skills.",
      achievements: [
        "Developed 10+ client websites using HTML, CSS, and JavaScript",
        "Learned version control with Git and collaborative workflows",
        "Assisted in website maintenance and bug fixes",
        "Gained experience in content management systems",
        "Participated in client meetings and requirement gathering"
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCard = experiences[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <div className="experience-page">
      <div className="experience-section">
        {/* Experience Cards - Left Side */}
        <div className="experience-cards">
          <div className="experience-cards-container">
            <div className="experience-card">
              {/* Card Header */}
              <div className="experience-card-header">
                <div className="experience-card-number">
                  {currentCard.number}
                </div>
                <div className="experience-card-nav">
                  <span 
                    onClick={handlePrevious}
                    className="nav-arrow"
                  >
                    ◀
                  </span>
                  <span 
                    onClick={handleNext}
                    className="nav-arrow"
                  >
                    ▶
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div className="experience-card-info">
                <h3 className="experience-card-title">
                  {currentCard.title}
                </h3>
                <div className="experience-card-company">
                  {currentCard.company}
                </div>
                <div className="experience-card-period">
                  {currentCard.period}
                </div>
              </div>

              <p className="experience-card-description">
                {currentCard.description}
              </p>

              <ul className="experience-card-list">
                {currentCard.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Hero Content - Right Side */}
        <div className="hero-content">
          <h1>The Path I've Built</h1>
         
          <h2>Shaping Skills Through Real-World Experience</h2>
          <p>I architect every pixel and process — shaping apps that feel as good as they function!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;