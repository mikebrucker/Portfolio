import React, { useEffect } from "react";
import "../../scss/Splash.scss";
import mikeSkyDiveGif from "../../images/mikeskydive.gif";
import Projects from "../projects/Projects";
import ProfileSummary from "../profile/ProfileSummary";

const Splash = ({ scrollToProfileSummary }) => {
  useEffect(() => {
    document.title = "Mike Brucker";
  });

  // if the browser specifies a mobile device the gif will play
  // if not then it should be a desktop and the youtube video will play in a playlist
  const splashVideo = navigator.userAgent.match(/Mobile|Android|iPhone/gi) ? (
    <img src={mikeSkyDiveGif} alt="Me Skydiving" />
  ) : (
    <div className="splash-iframe">
      <iframe
        title="Me Skydiving"
        src="https://www.youtube.com/embed/bVwJO6gABTM?&mute=1&loop=1​&autoplay=1&controls=0&disablekb=1&modestbranding=1&autohide=1&rel=0&playlist=bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM,bVwJO6gABTM"
        frameBorder="0"
        allow="autoplay"
      />
    </div>
  );

  const splashScreenGif = mikeSkyDiveGif ? (
    <div onClick={scrollToProfileSummary}>
      {splashVideo}
      <div id="splashText" className="splash-text-container">
        <div className="splash-text-first splash-text">
          <div>Hi! I'm Mike Brucker, a Web Developer</div>
          <div>Welcome to my Portfolio</div>
        </div>
      </div>
      <div className="splash-text-container">
        <div className="splash-text-second splash-text">
          Click Here to Dive Into my Code Below!
        </div>
      </div>
    </div>
  ) : null;

  return (
    <main className="Splash">
      {splashScreenGif}
      <ProfileSummary />
      <Projects />
    </main>
  );
};

export default Splash;
