import React from "react";
import ReactSVG from "react-svg";
import "../../scss/Skills.scss";

const Skills = ({ aboutMe }) => {
  const skills =
    aboutMe && aboutMe.skills
      ? aboutMe.skills.map(skill => {
          return (
            <div key={skill.name} className="profile-skill">
              {skill.icon.charAt(0) === "/" ? (
                <ReactSVG src={skill.icon} />
              ) : (
                <i className={skill.icon} />
              )}
            </div>
          );
        })
      : null;

  return <div className="Skills">{skills}</div>;
};

export default Skills;
