import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import "../../scss/Projects.scss";

// Shows just the project name, tech, and first picture
const ProjectSummary = ({ project }) => {
  const techStack =
    project && project.tech && project.tech.length === 1
      ? project.tech.map(tech => <span key={tech}>{tech}</span>)
      : project.tech.length > 1
      ? project.tech.map((tech, i, arr) => {
          return arr.length - 1 !== i ? (
            arr.length === 2 ? (
              <span key={tech}>{tech}</span>
            ) : (
              <span key={tech}>{tech}, </span>
            )
          ) : (
            // last item
            <span key={tech}> and {tech}</span>
          );
        })
      : null;

  return project ? (
    <section className="ProjectSummaryRoot">
      <Link
        color="secondary"
        component={RouterLink}
        underline="none"
        to={`/${project.name.replace(/\s/g, "")}`}
      >
        <div className="ProjectSummary">
          <h1>{project.name}</h1>
          <h3>Built with {techStack}.</h3>
          <img src={project.images[0]} alt="Project Screenshot" />
        </div>
      </Link>
    </section>
  ) : (
    <div className="ProjectSummary">Loading Project...</div>
  );
};

export default ProjectSummary;
