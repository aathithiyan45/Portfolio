import React from "react";
import "./Achievements.css";

const achievements = [
  {
    title: "🏆 NOOB HACKFEST Winner",
    desc: "1st place at the 24-Hour Global Hackathon at SRM Institute of Science and Technology. Built an AI Adaptive Learning Platform using Django and REST APIs. Competed against 170+ teams. Prize ₹25,000.",
    year: "2026",
    highlight: true,
    link: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_hackathonwinner-noobhackfest-ai-activity-7428716251633315840-6SMF"
  },
  {
    title: "🥇 Design Forge Hackathon",
    desc: "Secured first place at DHRUVA 2025 hackathon by building a full-stack application with strong UI/UX design and backend functionality. Prize ₹3000.",
    year: "2025",
    link: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_hackathon-fullstackdevelopment-uiux-activity-7311003219852177408-oi44"
  },
  {
    title: "🥈 Frontend Finesse",
    desc: "Won second prize in a national-level UI design challenge by designing a handcrafted e-commerce website interface.",
    year: "2025",
    link: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_uidesign-frontendfinesse-figmadesign-activity-7328078112963866624-ZLRR"
  },
  {
    title: "Coding Ninjas Core Designer",
    desc: "Core design team member responsible for posters, event branding, and visual assets for the Coding Ninjas SCE community.",
    year: "2024",
  },
];

const Achievements = () => {
  return (
    <section className="achievements">
      <h2 className="achievements-title">Achievements</h2>
      <p className="achievements-subtitle">
        Highlights from design, development and community work.
      </p>

      <div className="achievements-grid">
        {achievements.map((ach, index) => (
          <a
            key={index}
            href={ach.link}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
          >
            <div
              className={`achievement-card${ach.highlight ? " achievement-card--gold" : ""}`}
            >
              <div className="card-header">
                <h3 className="card-title">{ach.title}</h3>
                <span className={`ach-year${ach.highlight ? " ach-year--gold" : ""}`}>
                  {ach.year}
                </span>
              </div>

              <p className="card-desc">{ach.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Achievements;