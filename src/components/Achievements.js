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
];

const Achievements = () => {
  return (
    <div className="achievements">
      <h2 className="achievements-title">Achievements</h2>
      
      {/* Marquee Container */}
      <div className="marquee-container">
        <div className="marquee-content">
          {/* First set of achievements */}
          {achievements.map((ach, index) => (
            <div key={`first-${index}`} className="achievement-card">
              <h3>{ach.title}</h3>
              <p>{ach.desc}</p>
              <span className="ach-year">{ach.year}</span>
            </div>
          ))}
          
          {/* Duplicate for seamless loop */}
          {achievements.map((ach, index) => (
            <div key={`second-${index}`} className="achievement-card">
              <h3>{ach.title}</h3>
              <p>{ach.desc}</p>
              <span className="ach-year">{ach.year}</span>
            </div>
          ))}
          
          {/* Third set for extra smooth scrolling */}
          {achievements.map((ach, index) => (
            <div key={`third-${index}`} className="achievement-card">
              <h3>{ach.title}</h3>
              <p>{ach.desc}</p>
              <span className="ach-year">{ach.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;