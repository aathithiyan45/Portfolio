import React from 'react';
import './CTAbuttons.css';

const CTAButtons = ({
  primaryText = "View My Work",
  primaryLink = "/projects",
  secondaryText = "Contact Me",
  secondaryLink = "/contact",
  primaryDownload = false,
  secondaryDownload = false,
  primaryClassName = "",
  secondaryClassName = ""
}) => {
  return (
    <div className="cta-buttons">
      <a
        href={primaryLink}
        className={`btn primary ${primaryClassName}`}
        {...(primaryDownload ? { download: 'Resume.pdf', target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {primaryText}
      </a>
      <a
        href={secondaryLink}
        className={`btn secondary ${secondaryClassName}`}
        {...(secondaryDownload ? { download: 'Resume.pdf', target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {secondaryText}
      </a>
    </div>
  );
};

export default CTAButtons;