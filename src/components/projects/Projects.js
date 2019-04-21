import React from "react";
import { projects } from "../../data";
import ProjectSummary from "./ProjectSummary";
import "../../scss/Projects.scss";

// Displays all ProjectSummaries on landing page
const Projects = ({ scrollToTopOfPage }) => {
  const myProjects = projects
    ? projects.map(project => {
        return (
          <ProjectSummary
            key={project.id}
            project={project}
            scrollToTopOfPage={scrollToTopOfPage}
          />
        );
      })
    : "Loading...";

  return <div className="Projects">{myProjects}</div>;
};

export default Projects;
