import React from "react";
import "./EducationCard.css";

const EducationCard = ({ year, title, place, details }) => {
  return (
    <article className="timeline-item">
      {/* Title + Year */}
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
          year="2023 – 2027"
          title="B.Tech – Information Technology"
          place="Saranathan College of Engineering, Trichy"
          details="CGPA: 8.1"
        />

        <EducationCard
          year="2020 – 2022"
          title="Higher Secondary Education"
          place="Kalaimagal Higher Secondary School, Thanjavur"
          details="Percentage: 84.5%"
        />

      </div>
    </section>
  );
};

export default EducationSection;
export { EducationCard };