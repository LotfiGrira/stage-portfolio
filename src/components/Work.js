import "./WorkCardStyles.css";
import WorkCard from "./WorkCard"; // Utilisez bien 'WorkCard' avec la majuscule
import workCardData from "./WorkCardData";
import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workCardData.map((val, ind) => {
          return (
            <WorkCard // Correction ici : 'WorkCard' avec une majuscule
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title} // Correction ici aussi, 'val.title' au lieu de 'val.text'
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
