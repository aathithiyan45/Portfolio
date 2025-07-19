import React, { useState } from 'react';
import './Contact.css';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdkzjwrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert("❌ Error sending message. Please try again.");
        console.error(result);
      }
    } catch (err) {
      alert("❌ Something went wrong. Try again later.");
      console.error(err);
    }

    setSubmitting(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-section">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <h2>Let's Create Something Amazing Together!</h2>
          <p>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">Email</span>
              <a href="mailto:aathimi07012006@gmail.com">aathimi07012006@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span>Thanjavur, Tamil Nadu</span>
            </div>
          </div>
          <SocialLinks />
        </div>

        <div className="contact-form-container">
          <div className="form-header">
            <h3>Send me a message</h3>
            <p>I'll get back to you within 24 hours</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;