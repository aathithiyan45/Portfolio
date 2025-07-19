import React, { useState } from 'react';
import './Achievement.css'; 

const AchievementPage = () => {
  const achievements = [
    {
      number: "01",
      title: "Tech Innovation Award",
      category: "Industry Recognition",
      year: "2024",
      description: "Recognized for developing an innovative AI-powered web application that revolutionized user experience and increased customer satisfaction by 85%.",
      highlights: [
        "First place in Regional Tech Innovation Competition",
        "Featured in TechCrunch and Wired Magazine",
        "Patent filed for unique algorithm implementation",
        "Keynote speaker at 3 major tech conferences",
        "Mentored 50+ developers through the innovation process"
      ]
    },
    {
      number: "02", 
      title: "Open Source Contributor",
      category: "Community Impact",
      year: "2023",
      description: "Made significant contributions to major open source projects, helping thousands of developers worldwide and building tools used by Fortune 500 companies.",
      highlights: [
        "500+ commits to popular React libraries",
        "Created npm package with 100K+ weekly downloads",
        "Maintained 5 open source projects with 10K+ stars",
        "Resolved 200+ GitHub issues across various projects",
        "Speaker at Open Source Summit and ReactConf"
      ]
    },
    {
      number: "03",
      title: "Performance Optimization Expert",
      category: "Technical Excellence",
      year: "2023", 
      description: "Led performance optimization initiatives that resulted in dramatic improvements across multiple enterprise applications, saving companies thousands in infrastructure costs.",
      highlights: [
        "Reduced server costs by 70% through optimization",
        "Improved app performance by 300% average load time",
        "Implemented caching strategies serving 1M+ requests/day",
        "Created performance monitoring tools adopted company-wide",
        "Published whitepaper on modern web optimization techniques"
      ]
    },
    {
      number: "04",
      title: "Team Leadership Excellence",
      category: "Leadership & Mentorship",
      year: "2022",
      description: "Recognized for outstanding leadership in building and mentoring high-performing development teams, fostering innovation and delivering exceptional results.",
      highlights: [
        "Built and led development team of 15 engineers",
        "Achieved 98% project delivery success rate",
        "Implemented agile practices increasing productivity by 45%",
        "Mentored 20+ developers who received promotions",
        "Established coding standards adopted across organization"
      ]
    },
    {
      number: "05",
      title: "Full Stack Mastery Certification",
      category: "Professional Development",
      year: "2021",
      description: "Achieved advanced certifications in multiple technologies and frameworks, demonstrating comprehensive expertise across the entire technology stack.",
      highlights: [
        "AWS Solutions Architect Professional certified",
        "Google Cloud Platform Professional Developer",
        "Microsoft Azure Expert certification",
        "Advanced React and Node.js specialist",
        "Kubernetes and Docker container orchestration expert"
      ]
    },
    {
      number: "06",
      title: "Startup Success Story",
      category: "Entrepreneurial Achievement",
      year: "2020",
      description: "Co-founded and developed MVP for a successful startup that secured Series A funding and grew to serve over 50,000 active users within the first year.",
      highlights: [
        "Secured $2M Series A funding round",
        "Grew user base to 50K+ active monthly users",
        "Built entire technical infrastructure from scratch",
        "Achieved break-even within 8 months of launch",
        "Featured in top 10 startups to watch list"
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCard = achievements[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <div className="achievement-page">
      <div className="achievement-section">
        {/* Achievement Cards - right Side */}
        <div className="achievement-cards">
          <div className="achievement-cards-container">
            <div className="achievement-card">
              {/* Card Header */}
              <div className="achievement-card-header">
                <div className="achievement-card-number">
                  {currentCard.number}
                </div>
                <div className="achievement-card-nav">
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
              <div className="achievement-card-info">
                <h3 className="achievement-card-title">
                  {currentCard.title}
                </h3>
                <div className="achievement-card-category">
                  {currentCard.category}
                </div>
                <div className="achievement-card-year">
                  {currentCard.year}
                </div>
              </div>

              <p className="achievement-card-description">
                {currentCard.description}
              </p>

              <ul className="achievement-card-list">
                {currentCard.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Hero Content - left Side */}
        <div className="hero-content">
          <h1>Milestones of Excellence</h1>
         
          <h2>Celebrating Success Through Innovation</h2>
          <p>Every achievement tells a story of dedication, innovation, and the relentless pursuit of excellence in technology!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementPage;