import React, { useEffect } from "react";
import { projects } from "../../data";
import { FaGithub } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import "../../scss/Project.scss";
import ProjectSkills from "./ProjectSkills";

const Project = ({ location }) => {
  useEffect(() => {
    document.title =
      project && project.name ? project.name : "Nothing To See Here";
  });

  const projectName =
    location && location.pathname ? location.pathname.substring(1) : null;

  const project = projectName
    ? projects.filter(proj => proj.name.replace(/\s/g, "") === projectName)[0]
    : null;

  const projectIcon = project && project.icon ? <project.icon /> : null;

  const techStack =
    project &&
    project.tech &&
    project.tech.map((tech, i, arr) => {
      return arr.length - 1 !== i ? (
        <span key={tech}>{tech}, </span>
      ) : (
        // last item
        <span key={tech}>{tech}.</span>
      );
    });

  const links =
    project && project.links ? (
      <div>
        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="primary">
            Live {projectIcon}
          </Button>
        </a>
        <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="primary">
            Repo <FaGithub />
          </Button>
        </a>
      </div>
    ) : null;

  const detail =
    project && project.detail
      ? project.detail.map((detail, i) => <p key={i}>{detail}</p>)
      : null;

  const images =
    project &&
    project.images &&
    project.images.map((img, i) => {
      return <img key={i} src={img} alt="project" />;
    });

  return project ? (
    <div className="Project">
      <h1>{project.name}</h1>
      <h3>Built with {techStack}</h3>
      <ProjectSkills skills={project.tech} />
      {links}
      <div>{detail}</div>
      <div>{images}</div>
    </div>
  ) : (
    <div className="Project">
      <h1>No project with that name</h1>
      <h2>But just look at how that footer stays at the bottom!</h2>
      <h2>Pretty sweet, Eh?</h2>
    </div>
  );
};
export default Project;
