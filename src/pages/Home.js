import React from 'react';
import './Home.css';
import SocialLinks from '../components/SocialLinks';
import CTAButtons from '../components/CTAButtons';


const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Aathithiyan</h1>
          <h2>Building Digital Experiences That Matter!</h2>
          
          <div className="hero-image mobile-only-img">
            <img src="profile.jpeg" alt="Aathithiyan" />
          </div>

          <p>
            I specialize in Full-Stack Development & UI/UX Design to craft
            seamless and high-performing web applications
          </p>
          <CTAButtons />
          <SocialLinks />

        </div>
        <div className="hero-image desktop-only-img">
          <img src="profile.jpeg" alt="Aathithiyan" />
        </div>
      </div>
    </div>
  );
};

export default Home;
