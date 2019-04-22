import React from "react";
import { projects } from "../../data";
import ProjectSummary from "./ProjectSummary";
import "../../scss/Projects.scss";

// Displays all ProjectSummaries on landing page
const Projects = () => {
  const myProjects = projects
    ? projects.map(project => {
        return <ProjectSummary key={project.id} project={project} />;
      })
    : "Loading...";

  return <div className="Projects">{myProjects}</div>;
};

export default Projects;
