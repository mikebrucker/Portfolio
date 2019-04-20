import React from "react";
import ReactSVG from "react-svg";
import { aboutMe } from "../../data";
import "../../scss/Skills.scss";

const ProjectSkills = ({ skills }) => {
  const projectSkills =
    skills && aboutMe && aboutMe.skills
      ? skills.map(skill => {
          const aboutSkill = aboutMe.skills.filter(
            aboutSkill => aboutSkill.name === skill
          )[0];

          return aboutSkill ? (
            <div key={aboutSkill.name} className="display-skill">
              {aboutSkill.icon.charAt(0) === "/" ? (
                <ReactSVG src={aboutSkill.icon} />
              ) : (
                <i className={aboutSkill.icon} />
              )}
            </div>
          ) : null;
        })
      : null;

  return <div className="Skills">{projectSkills}</div>;
};

export default ProjectSkills;
