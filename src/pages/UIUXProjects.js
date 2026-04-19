import React, { useState, useRef, useEffect } from 'react';
import './UIUXProjects.css';

const UIUXProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [inlineImageIndex, setInlineImageIndex] = useState(null);
  const inlineImageRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "NeuroHome Smart Home App",
      description: "Minimal smart home control app focused on clarity and intuitive interactions.",
      category: "Mobile App UI",
      image: "/images/neurohome-ui.png",
      detailedDescription: "NeuroHome is a smart home control application designed with minimalism and ease of use in mind. The focus is on providing users with a clear and intuitive interface to manage various smart devices seamlessly, featuring smooth micro-interactions and a coherent visual hierarchy.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
      features: [
        "Minimalist visual identity",
        "Intuitive smart home controls",
        "Dark mode optimization",
        "Interactive prototyping"
      ],
      codeLink: "https://www.behance.net/gallery/230197251/NeuroHome-A-Minimal-Smart-Home-Control-App-UIUX",
      liveLink: "https://www.behance.net/gallery/230197251/NeuroHome-A-Minimal-Smart-Home-Control-App-UIUX"
    },
    {
      id: 2,
      title: "Login & Sign-Up UI",
      description: "Clean and minimal authentication flow with strong visual hierarchy and smooth UX.",
      category: "Mobile App UI",
      image: "/images/login-signup-ui.png",
      detailedDescription: "A conceptual redesign of an authentication flow. The project emphasizes user retention by making the login and sign-up processes as frictionless as possible. It features a clean aesthetic, clear error messages, and immediate visual feedback.",
      technologies: ["Figma", "Interaction Design", "Visual Design"],
      features: [
        "Clean authentication flow",
        "Strong visual hierarchy",
        "Error state handling",
        "Responsive layout"
      ],
      codeLink: "https://www.behance.net/gallery/233399293/Login-Sign-Up-UIUX-Concept",
      liveLink: "https://www.behance.net/gallery/233399293/Login-Sign-Up-UIUX-Concept"
    },
    {
      id: 3,
      title: "Food Delivery App UI",
      description: "Fast and intuitive food ordering interface focused on clarity and user flow.",
      category: "Mobile App UI",
      image: "/images/food-delivery-ui.png",
      detailedDescription: "A comprehensive food delivery app interface designed to minimize friction from menu browsing to checkout. The UI is crafted to be highly appetizing and fast, allowing users to find their favorite meals and place orders with minimal taps.",
      technologies: ["Figma", "User Research", "Mobile UI Design"],
      features: [
        "Fast ordering process",
        "Clear navigation architecture",
        "Appetizing visual design",
        "Order tracking visualization"
      ],
      codeLink: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_food-delivery-app-ui-activity-7340613774476787713-zbiT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAElSGy4B5y3tVVQqgJwZiQtKiR3p3lCF_kE",
      liveLink: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_food-delivery-app-ui-activity-7340613774476787713-zbiT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAElSGy4B5y3tVVQqgJwZiQtKiR3p3lCF_kE"
    },
    {
      id: 4,
      title: "Hotel Booking Landing Page",
      description: "Conversion-focused landing page guiding users smoothly from browse to booking.",
      category: "Web UI Design",
      image: "/images/hotel-booking-ui.png",
      detailedDescription: "A landing page created specifically for a hotel booking platform to increase conversion rates. It guides the user through a narrative that builds trust, showcases amenities with high-quality imagery, and culminates in a straightforward booking form.",
      technologies: ["Figma", "Web Design", "Conversion Rate Optimization"],
      features: [
        "Conversion-focused layout",
        "Clear call-to-actions",
        "Trust-building elements",
        "Responsive web grid"
      ],
      codeLink: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_conversion-focused-hotel-booking-landing-activity-7362726994540703744-PKXI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAElSGy4B5y3tVVQqgJwZiQtKiR3p3lCF_kE",
      liveLink: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_conversion-focused-hotel-booking-landing-activity-7362726994540703744-PKXI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAElSGy4B5y3tVVQqgJwZiQtKiR3p3lCF_kE"
    },
    {
      id: 5,
      title: "E-Commerce Website UI",
      description: "Premium shopping experience crafted with strong layout, colors, and storytelling.",
      category: "Web UI Design",
      image: "/images/ecommerce-ui.png",
      detailedDescription: "A premium e-commerce web interface focusing on a seamless shopping experience. The design employs strong layout principles, elegant typography, and a tailored color palette to showcase products effectively and drive sales.",
      technologies: ["Figma", "E-Commerce Design", "Design Systems"],
      features: [
        "Premium shopping experience",
        "Product storytelling",
        "Streamlined checkout",
        "Consistent design system"
      ],
      codeLink: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_uidesign-frontendfinesse-figmadesign-activity-7328078112963866624",
      liveLink: "https://www.linkedin.com/posts/aathithiyan-p-7a6b692a3_uidesign-frontendfinesse-figmadesign-activity-7328078112963866624"
    }
  ];

  /* Which project to show in the LEFT desktop preview */
  const displayProject = hoveredProject !== null ? hoveredProject : currentProject;
  const currentProjectData = projects[displayProject];

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setHoveredProject(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredProject(null);
    }
  };

  const handleProjectClick = (index) => {
    if (isMobile) {
      if (inlineImageIndex === index) {
        // Already showing this card's image → open details
        setCurrentProject(index);
        setShowDetails(true);
        setInlineImageIndex(null);
      } else {
        // Show image above this card
        setInlineImageIndex(index);
        setCurrentProject(index);
        setTimeout(() => {
          inlineImageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
    } else {
      setCurrentProject(index);
      setShowDetails(true);
    }
  };

  const handleBackClick = () => {
    setShowDetails(false);
    setInlineImageIndex(null);
  };

  return (
    <div className="uiux-projects-page">
      <div className="projects-container">

        {/* ── LEFT: Desktop image preview (hidden on mobile) ── */}
        <div className="project-preview-section desktop-preview-only">
          <div className="project-preview-container">
            <div className="project-preview-frame">
              <img
                key={currentProjectData.image}
                src={currentProjectData.image}
                alt={currentProjectData.title}
                className="project-preview-image fade-image"
              />
            </div>
            <div className="project-preview-caption">
              {currentProjectData.title}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Project list or details ── */}
        <div className="project-list-section">
          {!showDetails ? (
            <>
              {/* Title */}
              <div className="project-list-header">
                <h2 className="project-list-title">Crafting User Experiences</h2>
                <p className="project-list-subtitle">
                  From concept to prototype, we design intuitive interfaces that delight users and drive engagement.
                </p>
              </div>

              {/* Project list */}
              <div className="project-list-items">
                {projects.map((project, index) => (
                  <React.Fragment key={project.id}>

                    {/*
                      MOBILE INLINE IMAGE:
                      Renders ABOVE the card that is currently active (inlineImageIndex).
                      On desktop this is always hidden via CSS.
                    */}
                    {isMobile && inlineImageIndex === index && (
                      <div
                        className="mobile-inline-preview"
                        ref={inlineImageRef}
                      >
                        <div className="mobile-inline-frame">
                          <img
                            key={project.image}
                            src={project.image}
                            alt={project.title}
                            className="mobile-inline-image fade-image"
                          />
                        </div>
                        <div className="mobile-inline-caption">{project.title}</div>
                        <div className="mobile-inline-hint">Tap the card below to view details →</div>
                      </div>
                    )}

                    {/* Card */}
                    <div
                      className={`project-list-item ${index === currentProject ? 'active' : ''} ${isMobile && inlineImageIndex === index ? 'image-shown' : ''}`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleProjectClick(index)}
                    >
                      <div className="project-list-info">
                        <p className="project-list-item-title">{project.title}</p>
                        <p className="project-list-item-subtitle">{project.description}</p>
                      </div>
                      <div className="project-list-category">
                        {project.category}
                      </div>
                    </div>

                  </React.Fragment>
                ))}
              </div>

              {/* Mobile tap hint */}
              {isMobile && inlineImageIndex === null && (
                <p className="mobile-tap-hint">Tap a project to preview its image</p>
              )}
            </>
          ) : (
            /* ── Details view ── */
            <div className="project-details">
              <button className="back-button" onClick={handleBackClick}>
                ← Back to Projects
              </button>

              <div className="project-details-header">
                <h2 className="project-details-title">{currentProjectData.title}</h2>
                <span className="project-details-category">{currentProjectData.category}</span>
              </div>

              <div className="project-details-content">
                <div className="project-description">
                  <h3>About This Project</h3>
                  <p>{currentProjectData.detailedDescription}</p>
                </div>

                <div className="project-technologies">
                  <h3>Tools & Disciplines</h3>
                  <div className="tech-tags">
                    {currentProjectData.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h3>Key Design Aspects</h3>
                  <ul className="features-list">
                    {currentProjectData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <a
                    href={currentProjectData.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UIUXProjects;