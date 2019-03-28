import React from "react";

const Project = ({ project }) => {
  return (
    <div className="Project">
      <div>{project.id}</div>
      <div>{project.name}</div>
      <div>{project.tech}</div>
      <div>{project.detail}</div>
      <div>project.images map out all</div>
    </div>
  );
};

export default Project;
