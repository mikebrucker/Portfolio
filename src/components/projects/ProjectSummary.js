import React from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { Link } from "@material-ui/core";
import "./projects.scss";

const ProjectSummary = ({ project }) => {
  return (
    <div className="ProjectSummary">
      <h6>{project.id}</h6>
      <Link
        color="secondary"
        component={RouterLink}
        underline="none"
        to={`/${project.id}`}
      >
        <h1>{project.name}</h1>
      </Link>
      <div>{project.tech}</div>
      <div>{project.detail}</div>
      <div>project.images show only first</div>
    </div>
  );
};

export default ProjectSummary;
