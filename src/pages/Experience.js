import React, { useState } from "react";
import "./Experience.css";
import SocialLinks from "../components/SocialLinks";
import CTAButtons from "../components/CTAButtons";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const experienceCards = [
      {
        number: "01",
        title: "Web Development Intern",
        subtitle: "@ JADAYU Software Technology",
        duration: "Jun 2025 – Jul 2025 · On-site",
        description:
          "Hands-on internship focused on frontend web development and real-time project implementation:",
        points: [
          "Learned and applied HTML, CSS, and JavaScript fundamentals in real-time projects",
          "Built static and responsive web pages following modern design principles",
          "Implemented clean layouts with proper structure and styling standards",
          "Worked under professional mentorship and understood real-world frontend workflows"
        ],
        certificate: {
          name: "Web Development Internship – JADAYU Software Technology",
          link: "#" // add certificate link if available
        }
      },
      {
        number: "02",
        title: "UI/UX Design Intern",
        subtitle: "@ JADAYU Software Technology",
        duration: "Jun 2025 – Jul 2025 · On-site",
        description:
          "Focused on learning and applying UI/UX design principles for web and mobile interfaces:",
        points: [
          "Learned core design principles: layout, typography, hierarchy, and responsive design",
          "Created low-fidelity and high-fidelity wireframes using Figma",
          "Designed user-friendly interface structures with usability in mind",
          "Developed a strong understanding of visual consistency and spacing"
        ],
        certificate: {
          name: "UI/UX Design Internship – JADAYU Software Technology",
          link: "#"
        }
      },
      {
        number: "03",
        title: "UI/UX Design Intern",
        subtitle: "@ Cognifyz Technologies",
        duration: "May 2025 – Jun 2025 · Remote",
        description:
          "Worked remotely on UI/UX design tasks with a focus on user-centric and accessible interfaces:",
        points: [
          "Designed mobile and web UI screens using Figma",
          "Created clean, modern, and responsive interface layouts",
          "Collaborated with the design team and followed task requirements precisely",
          "Practiced wireframing, prototyping, and usability-focused design decisions",
          "Demonstrated strong attention to detail and communication skills"
        ],
        certificate: {
          name: "UI/UX Design Internship – Cognifyz Technologies",
           link: "https://drive.google.com/file/d/1z9Cxx47xPbYXzF6D6kDxPKIf-yYqcA7S/view?usp=sharing"
  }
        
      }
    ];


  const prev = () =>
    setCurrentIndex((i) => (i > 0 ? i - 1 : experienceCards.length - 1));
  const next = () =>
    setCurrentIndex((i) => (i < experienceCards.length - 1 ? i + 1 : 0));

  const card = experienceCards[currentIndex];

  return (
    <div className="experience-page">
      <div className="experience-section">
        <div className="hero-content">
          <h1>My Journey,</h1>
          <h1>My Growth</h1>
          <h2>Professional Experiences That Define Me</h2>
          <p>
            Hands-on industry experience working with teams, real products, and
            modern tech stacks.
          </p>
          <CTAButtons />
          <SocialLinks />
        </div>

        <div className="experience-cards">
          <div className="experience-card">
            <div className="experience-card-header">
              <div className="experience-card-number">{card.number}</div>
              <div className="experience-card-nav">
                <span onClick={prev}>◀</span>
                <span onClick={next}>▶</span>
              </div>
            </div>

            <h3 className="experience-card-title">{card.title}</h3>
            <p className="experience-subtitle">{card.subtitle}</p>
            <span className="experience-duration">{card.duration}</span>

            <p className="experience-description">{card.description}</p>

            <ul className="experience-list">
              {card.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <div className="experience-certificate">
              🎓 Certificate:&nbsp;
              <a href={card.certificate.link} target="_blank" rel="noreferrer">
                {card.certificate.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
