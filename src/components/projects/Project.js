import React, { useEffect } from "react";
import { projects } from "../../data";
import "../../scss/Project.scss";
import Skills from "../profile/Skills";
import ExternalLinkButtons from "../layout/ExternalLinkButtons";

const Project = ({ location, scrollToTopOfPage }) => {
  useEffect(() => {
    document.title =
      project && project.name ? project.name : "Nothing To See Here";
    scrollToTopOfPage();
  });

  // Get the browser's location - mywebsite.com/projectName
  const projectName =
    location && location.pathname ? location.pathname.substring(1) : null;

  // If projectName matches the name of a project, with spaces removed,
  const project = projectName
    ? projects.filter(
        proj =>
          proj.name.replace(/\s/g, "").toLowerCase() ===
          projectName.toLowerCase()
      )[0]
    : null;

  // Built with this {techStack} HTML, CSS, JavaScript.
  const techStack =
    project && project.tech
      ? project.tech.map((tech, i, arr) => {
          return arr.length - 1 !== i ? (
            <span key={tech}>{tech}, </span>
          ) : (
            // last item
            <span key={tech}>{tech}.</span>
          );
        })
      : null;

  // Paragraphs about the project
  const detail =
    project && project.detail
      ? project.detail.map((detail, i) => <p key={i}>{detail}</p>)
      : null;

  // All project images
  const images =
    project && project.images
      ? project.images.map((img, i) => <img key={i} src={img} alt="project" />)
      : null;

  return project ? (
    <main className="Project">
      {<project.icon className="project-icon" />}

      <h1>{project.name}</h1>
      <h3>Built with {techStack}</h3>
      <Skills skills={project.tech} />
      <ExternalLinkButtons links={project.links} />
      <div>{detail}</div>
      <div>{images}</div>
    </main>
  ) : (
    <div className="Project">
      <h1>There is no project with that name.</h1>
      <h2>But just look at how that footer stays at the bottom!</h2>
      <h2>Pretty sweet, Eh?</h2>
    </div>
  );
};
export default Project;
