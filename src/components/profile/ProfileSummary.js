import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import "../../scss/ProfileSummary.scss";
import { aboutMe } from "../../data";
import Skills from "./Skills";

// Displays Summary of Profile on landing page
const ProfileSummary = ({ scrollToTopOfPage }) => {
  return aboutMe ? (
    <section id="topOfProfileSummary" className="ProfileSummaryRoot">
      <Link
        color="secondary"
        component={RouterLink}
        underline="none"
        onClick={scrollToTopOfPage}
        to={`/${aboutMe.type.replace(/\s/g, "")}`}
      >
        <div className="ProfileSummary">
          <img
            className="profile-summary-image"
            src={aboutMe.images[0]}
            alt="Me"
          />
          <div className="profile-summary-skills">
            <Skills skills={aboutMe.skills} />
          </div>
        </div>
      </Link>
    </section>
  ) : (
    <div id="topOfProfileSummary" className="ProfileSummary">
      Loading Profile...
    </div>
  );
};

export default ProfileSummary;
