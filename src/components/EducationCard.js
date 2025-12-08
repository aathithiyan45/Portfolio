import React from "react";
import "./EducationCard.css";

const EducationCard = ({ year, title, place, details }) => {
  return (
    <article className="timeline-item">
      {/* Title + Year row */}
      <div className="timeline-header">
        <h3 className="timeline-title">{title}</h3>
        <span className="timeline-year">{year}</span>
      </div>

      <h4 className="timeline-place">{place}</h4>
      <p className="timeline-details">{details}</p>
    </article>
  );
};


const EducationSection = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education Timeline</h2>

      <div className="education-container">
        <EducationCard
          year="2023-2027"
          title="Bachelor of Technology"
          place="Saranathan Collge of Engineering"
          details="Information Technology  • CGPA: 8.1/10"
        />
        <EducationCard
          year="2022-2020"
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
