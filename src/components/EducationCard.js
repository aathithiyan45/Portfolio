import React from "react";
import "./EducationCard.css";

const EducationCard = ({ year, title, place, details }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h3>{title}</h3>
        <h4>{place}</h4>
        <p>{details}</p>
      </div>
    </div>
  );
};

// Main Education Section Component with heading
const EducationSection = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education Timeline</h2>
      
      <div className="education-container">
        <EducationCard 
          year="2020-2024" 
          title="Bachelor of Technology" 
          place="ABC University" 
          details="Computer Science Engineering • CGPA: 8.5/10 • Graduated with Honors" 
        />
        <EducationCard 
          year="2018-2020" 
          title="Higher Secondary Education" 
          place="XYZ High School" 
          details="Science Stream • Percentage: 92% • State Board" 
        />
      </div>
    </section>
  );
};

export default EducationSection;
export { EducationCard };
