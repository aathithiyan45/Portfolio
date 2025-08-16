import React from "react";
import EducationCard from "./EducationCard";
import "./EducationCard.css";

const Education = () => {
  return (
    <div className="timeline">
      <EducationCard
        year="2021 – 2025"
        title="Bachelor of Technology, Information Technology"
        place="Saranathan College of Engineering, Trichy, Tamil Nadu"
        details="GPA: 8.2 / 10"
      />
      <EducationCard
        year="2019 – 2021"
        title="Higher Secondary (Class XII), Computer Science"
        place="Your School Name, City"
        details="Percentage: 85%"
      />
    </div>
  );
};

export default Education;
