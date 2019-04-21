import React from "react";
import ReactSVG from "react-svg";
import { aboutMe } from "../../data";
import "../../scss/Skills.scss";

const Skills = ({ skills }) => {
  // takes an array of skills names to display the skill/tech icon
  // if skill name is the same as tech.name
  // it shows up as either an <i />(devicon) or <ReactSVG />(svg in images file)
  const displaySkills =
    skills && aboutMe && aboutMe.tech
      ? skills.map(skill => {
          // matches input skill to tech on data list of tech
          const displaySkill = aboutMe.tech.filter(
            tech => tech.name === skill
          )[0];

          return displaySkill ? (
            <div key={displaySkill.name} className="display-skill">
              {displaySkill.icon.charAt(0) === "/" ? (
                <ReactSVG src={displaySkill.icon} />
              ) : (
                <i className={displaySkill.icon} />
              )}
            </div>
          ) : null;
        })
      : null;

  return <div className="Skills">{displaySkills}</div>;
};

export default Skills;
