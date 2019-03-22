import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <AppBar color="primary">
        <Toolbar>
          <IconButton color="secondary" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography color="secondary" variant="h4" noWrap>
            Mike Brucker
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
