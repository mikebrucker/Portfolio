import React from "react";
import { projects } from "./data";
import ProjectSummary from "./ProjectSummary";
import "../../scss/Projects.scss";

const Projects = ({ scrollToTopOfPage }) => {
  const myProjects = projects.map((project, i, arr) => {
    return arr.length - 1 !== i ? (
      <ProjectSummary
        key={project.id}
        project={project}
        scrollToTopOfPage={scrollToTopOfPage}
      />
    ) : (
      // last item
      <ProjectSummary
        key={project.id}
        project={project}
        scrollToTopOfPage={scrollToTopOfPage}
      />
    );
  });
  return <div className="Projects">{myProjects}</div>;
};

export default Projects;
