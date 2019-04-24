import React, { useEffect } from "react";
import { aboutMe } from "../../data";
import Moment from "react-moment";
import ReactSVG from "react-svg";
import Skills from "./Skills";
import "../../scss/Profile.scss";
import ExternalLinkButtons from "../layout/ExternalLinkButtons";

const Profile = ({ scrollToTopOfPage }) => {
  useEffect(() => {
    document.title = aboutMe.type;
    scrollToTopOfPage();
  });

  const about =
    aboutMe && aboutMe.about
      ? aboutMe.about.map((para, i) => <p key={i}>{para}</p>)
      : null;

  const profileImage =
    aboutMe && aboutMe.images ? (
      <img className="profile-image" src={aboutMe.images[0]} alt="Me" />
    ) : null;

  const education =
    aboutMe && aboutMe.education
      ? aboutMe.education.map(edu => {
          return (
            <div key={edu.from} className={`education ${edu.class}`}>
              <h3 className="edu-icon">
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

  return aboutMe ? (
    <main className="Profile">
      {<aboutMe.icon className="profile-icon" />}
      <h1>{aboutMe.name}</h1>
      {profileImage}
      <ExternalLinkButtons links={aboutMe.links} />
      {about}
      <Skills skills={aboutMe.skills} />
      {education}
    </main>
  ) : (
    <div className="Profile">Loading...</div>
  );
};
export default Profile;
