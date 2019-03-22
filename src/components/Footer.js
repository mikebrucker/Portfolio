import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import "./components.scss";
function Footer() {
  return (
    <footer className="Footer">
      <Toolbar color="primary">
        <Typography color="secondary" variant="h4" noWrap>
          &copy; {new Date().getFullYear()} Mike Brucker
        </Typography>
      </Toolbar>
    </footer>
  );
}

export default Footer;
