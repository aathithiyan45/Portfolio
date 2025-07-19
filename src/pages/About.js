import React, { useEffect, useRef } from 'react';
import './About.css';
import SocialLinks from '../components/SocialLinks';
import Experience from '../components/Experience';
import Achievement from '../components/Achievement';


const About = () => {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const achievementRef = useRef(null);

  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when section comes into view
            entry.target.classList.add('animate-in');
          } else {
            // Optional: Remove animation class when section leaves view
            // entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation 50px before element enters viewport
      }
    );

    // Observe all sections
    const sections = [heroRef.current, experienceRef.current, achievementRef.current];
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="about">
      {/* Top Section - Intro */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Aathithiyan</h1>
          <h2>🎓 Information Technology student</h2>
          <h3 className="animated">Full-Stack Developer & UI/UX Designer</h3>
          <p>
            I’m passionate about building digital experiences that are both functional and user-friendly.
            Whether it's crafting smooth user interfaces or developing strong backend systems, I enjoy
            turning ideas into real, working applications.
          </p>
          <div className="cta-buttons">
            <a href="/resume.pdf" className="btn primary" download>
              Download CV
            </a>
            <a href="/contact" className="btn secondary">Get In Touch</a>
          </div>
          <SocialLinks />
        </div>

        <div className="hero-image">
          <img src="profile.jpeg" alt="Aathithiyan" />
        </div>
      </section>

      {/* Bottom Section - Experience */}
      <section 
        ref={experienceRef}
        className="experience-wrapper section-animate"
        data-animation="slide-in-left"
      >
        <Experience />
      </section>
       {/* Bottom Section - Achievement */}
       <section 
        ref={achievementRef}
        className="achievement-wrapper section-animate"
        data-animation="slide-in-right"
      >
        <Achievement />
      </section>
    </div>
  );
};

export default About;
