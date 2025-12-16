import React, { useState } from "react";
import "./Experience.css";
import SocialLinks from "../components/SocialLinks";
import CTAButtons from "../components/CTAButtons";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experienceCards = [
    {
      number: "01",
      title: "UI/UX Designer Intern",
      subtitle: "@ ABC Designs",
      duration: "Jan 2024 – Mar 2024",
      description:
        "Focused on creating user-centric designs and improving user experience:",
      points: [
        "Wireframing and prototyping using Figma",
        "Designed responsive UI components",
        "Collaborated with developers for handoff",
        "Conducted usability testing",
      ],
      certificate: {
        name: "UI/UX Internship Certificate – ABC Designs",
        link: "#",
      },
    },
    {
      number: "02",
      title: "Full-Stack Developer Intern",
      subtitle: "@ XYZ Solutions",
      duration: "Jun 2024 – Aug 2024",
      description:
        "Built scalable web applications using modern technologies:",
      points: [
        "React + Django full-stack development",
        "REST API & authentication",
        "Performance optimization",
        "Database design & integration",
      ],
      certificate: {
        name: "Full-Stack Certificate – XYZ Solutions",
        link: "#",
      },
    },
    {
      number: "03",
      title: "Frontend Developer",
      subtitle: "@ Tech Innovators",
      duration: "Sep 2024 – Dec 2024",
      description:
        "Developed responsive and high-performance user interfaces:",
      points: [
        "Interactive React components",
        "Tailwind CSS layouts",
        "Accessibility improvements",
        "Agile team collaboration",
      ],
      certificate: {
        name: "Frontend Excellence Award",
        link: "#",
      },
    },
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
