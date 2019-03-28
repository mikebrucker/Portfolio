import React from "react";
import "./layout.scss";
import mikeskydivegif from "../../images/mikeskydive.gif";
import Projects from "../projects/Projects";

const Splash = () => {
  const splashVideo = navigator.userAgent.match(/Mobile|Android|iPhone/gi) ? (
    <img src={mikeskydivegif} alt="Me Skydiving" />
  ) : (
    <div className="splash-iframe">
      <iframe
        title="Me Skydiving"
        src="https://www.youtube.com/embed/gjrrtx3VyUQ?autoplay=1&mute=1&controls=0&showinfo=0&loop=1​&disablekb=1&modestbranding=1&autohide=1&rel=0"
        frameBorder="0"
        allow="autoplay"
      />
    </div>
  );

  return (
    <main className="Splash">
      {splashVideo}
      <Projects />
    </main>
  );
};

export default Splash;
