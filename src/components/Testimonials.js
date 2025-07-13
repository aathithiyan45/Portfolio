import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "John Doe",
    role: "Mentor at CodeLabs",
    quote: "Aathithiyan is a hardworking developer with exceptional UI/UX instincts and strong technical execution.",
    image: "https://via.placeholder.com/80",
    initials: "JD"
  },
  {
    name: "Jane Smith",
    role: "CEO, DevHire",
    quote: "His work ethic, creativity, and project delivery exceeded expectations every single time.",
    image: "https://via.placeholder.com/80",
    initials: "JS"
  },
  {
    name: "Suresh Kumar",
    role: "Fellow Developer",
    quote: "Working with Aathithiyan was smooth and inspiring. He pays attention to detail and always delivers top-notch solutions.",
    image: "https://via.placeholder.com/80",
    initials: "SK"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-container">
        <h2 className="testimonial-title">What Others Say</h2>
        <p className="testimonial-subtitle">Feedback from mentors, colleagues, and collaborators</p>
        
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">"{item.quote}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{item.initials}</div>
                <div className="author-info">
                  <div className="author-name">{item.name}</div>
                  <div className="author-title">{item.role}</div>
                </div>
              </div>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5★</span>
            <span className="stat-label">Average Rating</span>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Testimonials;