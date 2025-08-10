import React, { useEffect, useRef } from 'react';
import './About.css';
import SocialLinks from '../components/SocialLinks';
import CTAButtons from '../components/CTAButtons';


const About = () => {
  const experienceRef = useRef(null);
  const achievementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const sections = [experienceRef.current, achievementRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="about">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Aathithiyan</h1>
          <h2>🎓 Information Technology student</h2>
          <h3 className="animated">Full-Stack Developer & UI/UX Designer</h3>
          <p>
            I'm passionate about building digital experiences that are both functional and user-friendly.
            Whether it's crafting smooth user interfaces or developing strong backend systems, I enjoy
            turning ideas into real, working applications.
          </p>
          <CTAButtons />
          <SocialLinks />
        </div>
        <div className="hero-image">
          <img src="profile.jpeg" alt="Aathithiyan" />
        </div>
      </section>
      
      <section ref={experienceRef} className="experience-wrapper section-animate" data-animation="slide-in-left">
       
      </section>
      
      <section ref={achievementRef} className="achievement-wrapper section-animate" data-animation="slide-in-right">
       
      </section>
    </div>
  );
};

export default About;