import React from "react";
import logo from "../../images/logo.svg";
import "../../scss/ReactLogo.scss";

const ReactLogo = () => {
  return (
    <header className="ReactLogo">
      <img src={logo} className="AppLogo" alt="logo" />
    </header>
  );
};

export default ReactLogo;
