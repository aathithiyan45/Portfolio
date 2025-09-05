import React from 'react';
import './SocialLinks.css';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import GitHubIcon from '../assets/icons/github.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import FigmaIcon from '../assets/icons/figma.svg';
import BehanceIcon from '../assets/icons/behance.svg';

const SocialLinks = () => {
  const links = [
    { href: "https://www.linkedin.com/in/aathithiyan-p-7a6b692a3/", icon: LinkedInIcon, label: "LinkedIn" },
    { href: "https://github.com/aathithiyan45", icon: GitHubIcon, label: "GitHub" },
    { href: "https://www.instagram.com/unique_lover_45/?__pwa=1", icon: InstagramIcon, label: "Instagram" },
    { href: "https://www.figma.com/files/team/1439977738552784288/recents-and-sharing?fuid=1439977736845671965", icon: FigmaIcon, label: "Figma" },
    { href: "https://www.behance.net/aathithaathith1", icon: BehanceIcon, label: "Behance" },
  ];

  return (
    <div className="social-links">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon ${link.label.toLowerCase()}`}
          aria-label={link.label}
        >
          <img src={link.icon} alt={link.label} className="social-svg" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
