import React from "react";
import "../../scss/Splash.scss";
import mikeskydivegif from "../../images/mikeskydive.gif";
import Projects from "../projects/Projects";

const Splash = ({ scrollToTopOfPage }) => {
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

  return (
    <main className="Splash">
      <img src={mikeskydivegif} alt="Me Skydiving" />
      <Projects scrollToTopOfPage={scrollToTopOfPage} />
    </main>
  );
};

export default Splash;
