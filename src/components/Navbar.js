import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  center: {
    flex: 1,
    textAlign: "center"
  }
});

const Navbar = ({ classes }) => {
  return (
    <nav className="Navbar">
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography
            className={classes.center}
            color="secondary"
            variant="h4"
            noWrap
          >
            Mike Brucker
          </Typography>
          <IconButton color="secondary" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default withStyles(styles)(Navbar);
