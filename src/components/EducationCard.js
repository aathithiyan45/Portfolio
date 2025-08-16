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

export default EducationCard;
