import React, { useEffect } from "react";
import "../../scss/Splash.scss";
import mikeSkyDiveGif from "../../images/mikeskydive.gif";
import Projects from "../projects/Projects";
import ProfileSummary from "../profile/ProfileSummary";

const Splash = ({ scrollToTopOfPage, scrollToProfileSummary }) => {
  useEffect(() => {
    document.title = "Mike Brucker";
  });

  // Going with just the gif for now instead of the long youtube video which would only display on desktop.

  // const splashVideo = navigator.userAgent.match(/Mobile|Android|iPhone/gi) ? (
  //   <img src={mikeskydivegif} alt="Me Skydiving" />
  // ) : (
  //   <div className="splash-iframe">
  //     <iframe
  //       title="Me Skydiving"
  //       src="https://www.youtube.com/embed/gjrrtx3VyUQ?&mute=1&autoplay=1&controls=0&loop=1​&disablekb=1&modestbranding=1&autohide=1&playlist=gjrrtx3VyUQ"
  //       frameBorder="0"
  //       allow="autoplay"
  //     />
  //   </div>
  // );

  const splashScreenGif = mikeSkyDiveGif ? (
    <div onClick={scrollToProfileSummary}>
      <img id="splashGif" src={mikeSkyDiveGif} alt="Me Skydiving" />
      <div id="splashText" className="splash-text-container">
        <div className="splash-text-first splash-text">
          Hi! I'm Mike Brucker, a Web Developer
        </div>
      </div>
      <div className="splash-text-container">
        <div className="splash-text-second splash-text">
          Welcome to my Portfolio
        </div>
      </div>
      <div className="splash-text-container">
        <div className="splash-text-third splash-text">
          Come Dive Into My Code Below!
        </div>
      </div>
    </div>
  ) : null;

  return (
    <main className="Splash">
      {splashScreenGif}
      <ProfileSummary scrollToTopOfPage={scrollToTopOfPage} />
      <Projects scrollToTopOfPage={scrollToTopOfPage} />
    </main>
  );
};

export default Splash;
