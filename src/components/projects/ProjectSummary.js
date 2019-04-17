import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import "../../scss/Projects.scss";

const ProjectSummary = ({ project }) => {
  return (
    <div className="ProjectSummary">
      <h6>{project.id}</h6>
      <Link
        color="secondary"
        component={RouterLink}
        underline="none"
        onClick={window.scrollTo(0, 0)}
        to={`/${project.name}`}
      >
        <h1>{project.name}</h1>
      </Link>
      <div>{project.tech}</div>
      <div>{project.detail}</div>
      <div className="images">project.images show only first</div>
    </div>
  );
};

export default ProjectSummary;
