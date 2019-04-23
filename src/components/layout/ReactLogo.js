import React, { useEffect } from "react";
import logo from "../../images/logo.svg";
import "../../scss/ReactLogo.scss";

const ReactLogo = () => {
  useEffect(() => {
    document.title = "Secret Page!!!";
  });

  return (
    <header className="ReactLogo">
      <img src={logo} className="AppLogo" alt="logo" />
    </header>
  );
};

export default ReactLogo;
