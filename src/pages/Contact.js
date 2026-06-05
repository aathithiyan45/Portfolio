import React, { useState, Suspense } from 'react';
import './Contact.css';

const SocialLinks = React.lazy(() => import('../components/SocialLinks'));
const CTAButtons = React.lazy(() => import('../components/CTAButtons'));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  // status = { type: 'success' | 'error', message: string }

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus(null);
      return;
    }

    setSubmitting(true);
    setStatus(null);
    setErrors({});

    try {
      const response = await fetch('https://formspree.io/f/mdkzjwrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I’ll get back to you soon 😊'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please try again later.'
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-section">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <h2>Let's Create Something Amazing Together!</h2>
          <p>
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">Email</span>
              <a href="mailto:aathimi07012006@gmail.com">
                aathithiyan.work@gmail.com
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">Location</span>
              <span>Thanjavur, Tamil Nadu</span>
            </div>
          </div>

          <Suspense fallback={null}>
            <CTAButtons
              primaryText="Download Resume"
              primaryLink="/resume.pdf"
              primaryDownload={true}
              secondaryText="View Projects"
              secondaryLink="/projects/development"
            />
          </Suspense>

          <Suspense fallback={null}>
            <SocialLinks />
          </Suspense>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-container">
          <div className="form-header">
            <h3>Send me a message</h3>
            <p>I’ll get back to you within 24 hours</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            {status && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
