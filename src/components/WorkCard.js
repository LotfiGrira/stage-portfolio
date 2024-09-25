import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Work = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt={props.title} /> {/* Utilisation du titre comme alt pour l'accessibilité */}
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Work;
