import React from "react";
import { projects } from "./projectsData";
import ProjectSummary from "./ProjectSummary";
import "../../scss/Projects.scss";

const Projects = () => {
  const myProjects = projects.map(project => {
    return <ProjectSummary key={project.id} project={project} />;
  });
  return <div className="Projects">{myProjects}</div>;
};

export default Projects;
