import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="skills">
      <div className="skills-section">
        <div className="skills-content">
          <div className="skills-text">
            <h1>Skills & Expertise</h1>
            <h2>Full-Stack Developer & UI/UX Designer</h2>
            <p>
              I specialize in building user-focused, responsive web applications using
              modern technologies like Django, React, HTML/CSS, and Figma. From
              wireframes to APIs, I love transforming ideas into real digital products
              that solve problems and look great doing it.
            </p>

            <div className="skills-list">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span>React.js</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>HTML/CSS</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>JavaScript</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <h3>Backend Development</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span>Django</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>Python</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>Node.js</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;