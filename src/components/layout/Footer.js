import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    textAlign: "center",
    padding: theme.spacing.unit * 2
  }
});

const Footer = ({ classes }) => {
  return (
    <footer className="Footer">
      <AppBar className={classes.root} position="static" color="primary">
        <Typography color="secondary" variant="h4" noWrap>
          &copy; {new Date().getFullYear()} Mike Brucker
        </Typography>
      </AppBar>
    </footer>
  );
};

export default withStyles(styles)(Footer);
