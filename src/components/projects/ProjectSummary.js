import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import "../../scss/Projects.scss";

const ProjectSummary = ({ project, scrollToTopOfPage }) => {
  const techStack =
    project &&
    project.tech.map((tech, i, arr) => {
      return arr.length - 1 !== i ? (
        <span key={tech}>{tech}, </span>
      ) : (
        // last item
        <span key={tech}>{tech}.</span>
      );
    });

  return project ? (
    <div className="ProjectSummaryRoot">
      <Link
        color="secondary"
        component={RouterLink}
        underline="none"
        onClick={scrollToTopOfPage}
        to={`/${project.name}`}
      >
        <div className="ProjectSummary">
          <h1>{project.name}</h1>
          <h3>Built with {techStack}</h3>
          <img src={project.images[0]} alt="Project Screenshot" />
        </div>
      </Link>
    </div>
  ) : (
    <div className="ProjectSummary">Loading Project...</div>
  );
};

export default ProjectSummary;
