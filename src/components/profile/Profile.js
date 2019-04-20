import React, { useEffect } from "react";
import { aboutMe } from "../projects/data";
import Button from "@material-ui/core/Button";
import Moment from "react-moment";
import ReactSVG from "react-svg";
import Skills from "./Skills";
import "../../scss/Profile.scss";

const Profile = () => {
  useEffect(() => {
    document.title = aboutMe.name;
  });

  const links =
    aboutMe && aboutMe.links
      ? aboutMe.links.map(link => {
          return (
            <a
              key={link.name}
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

  const about =
    aboutMe && aboutMe.about
      ? aboutMe.about.map((para, i) => <p key={i}>{para}</p>)
      : null;

  const firstImage =
    aboutMe && aboutMe.images ? <img src={aboutMe.images[0]} alt="Me" /> : null;

  const education =
    aboutMe && aboutMe.education
      ? aboutMe.education.map(edu => {
          return (
            <div key={edu.from} className="education">
              <h3 className={`edu-icon ${edu.class}`}>
                <ReactSVG src={edu.icon} />
                {edu.school}
              </h3>
              <h4>{edu.degree}</h4>
              <h5 className="moment">
                <Moment format="MMM Do, YYYY">{edu.from}</Moment>
                <span> to </span>
                <Moment format="MMM Do, YYYY">{edu.to}</Moment>
              </h5>
            </div>
          );
        })
      : null;

  const images =
    aboutMe && aboutMe.images
      ? aboutMe.images.map((image, i) => <img key={i} src={image} alt="Me" />)
      : null;

  return aboutMe ? (
    <div className="Profile">
      {<aboutMe.icon className="profile-icon" />}
      <h1>{aboutMe.name}</h1>
      {firstImage}
      <Skills aboutMe={aboutMe} />
      {links}
      {education}
      {about}
    </div>
  ) : (
    <div className="Profile">Loading...</div>
  );
};
export default Profile;
