import React from "react";
import { aboutMe } from "../projects/data";
import Button from "@material-ui/core/Button";
import "../../scss/Profile.scss";

const Project = () => {
  const links =
    aboutMe && aboutMe.links
      ? aboutMe.links.map(link => {
          return (
            <a
              key={link.link}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="primary">
                {link.name} {<link.icon />}
              </Button>
            </a>
          );
        })
      : null;

  return aboutMe ? (
    <div className="Profile">
      <h1>{aboutMe.name}</h1>
      {links}
    </div>
  ) : (
    <div className="Profile">Loading...</div>
  );
};
export default Project;
