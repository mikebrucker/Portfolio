import React from "react";
import { connect } from "react-redux";
import { projects } from "./projectsData";
import { FaGithub } from "react-icons/fa";
import Button from "@material-ui/core/Button";

const Project = ({ project }) => {
  const techStack =
    project &&
    project.tech.map((tech, i, arr) => {
      return arr.length - 1 !== i ? (
        <span key={tech}>{tech}, </span>
      ) : (
        <span key={tech}>{tech}. </span>
      );
    });

  const links =
    project && project.links ? (
      <div>
        <a href={`http://${project.links.live}`}>
          <Button variant="contained" color="primary">
            Live
          </Button>
        </a>
        <a href={`http://${project.links.repo}`}>
          <Button variant="contained" color="primary">
            Repo
            <FaGithub />
          </Button>
        </a>
      </div>
    ) : null;

  const images =
    project &&
    project.images &&
    project.images.map((img, index) => {
      return <img key={index} src={img} alt="project" />;
    });

  return project ? (
    <div className="Project">
      <h1>{project.name}</h1>
      <h3>{techStack}</h3>
      {links}
      <p>{project.detail}</p>
      <div className="images">{images}</div>
    </div>
  ) : (
    <div className="Project">No Project with that name</div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const projectName = ownProps.match.params.project;
  const project = projectName
    ? projects.filter(proj => proj.name === projectName)[0]
    : null;
  return {
    project
  };
};

export default connect(mapStateToProps)(Project);
