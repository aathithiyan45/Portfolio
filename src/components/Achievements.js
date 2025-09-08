import React from "react";
import "./Achievements.css";

const achievements = [
  {
    title: "🥇 1st Place – Design Forge",
    desc: "Won first place in UI/UX design hackathon branding (₹3000 prize).",
    year: "2025",
  },
  {
    title: "🥈 2nd Place – Coding Ninjas Event", 
    desc: "Secured second place in competitive coding & UI design challenge.",
    year: "2025",
  },
  {
    title: "🎨 Community Designer",
    desc: "Designed posters and event branding for college & tech clubs.",
    year: "2024",
  },
  {
    title: "🏆 Best Innovation Award",
    desc: "Recognized for creative problem-solving in web development projects.",
    year: "2024",
  },
  {
    title: "⭐ Top Contributor",
    desc: "Active contributor to open-source projects and developer community.",
    year: "2024",
  },
  {
    title: "🎯 Project Excellence",
    desc: "Delivered high-quality full-stack applications with modern tech stack.",
    year: "2024",
  }
];

const Achievements = () => {
  // Create multiple sets for seamless infinite scroll
  const renderAchievementSet = (setKey) => {
    return achievements.map((ach, index) => (
      <div key={`${setKey}-${index}`} className="achievement-card">
        <h3>{ach.title}</h3>
        <p>{ach.desc}</p>
        <span className="ach-year">{ach.year}</span>
      </div>
    ));
  };

  return (
    <div className="achievements">
      <h2 className="achievements-title">Achievements</h2>
      
      {/* Marquee Container */}
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Multiple sets for perfect endless loop */}
          {renderAchievementSet('set1')}
          {renderAchievementSet('set2')}
          {renderAchievementSet('set3')}
          {renderAchievementSet('set4')}
          {renderAchievementSet('set5')}
          {renderAchievementSet('set6')}
        </div>
      </div>
    </div>
  );
};

export default Achievements;