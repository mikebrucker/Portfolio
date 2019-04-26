import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { FaReact } from "react-icons/fa";
import "../../scss/Footer.scss";
import Link from "@material-ui/core/Link";
import { aboutMe } from "../../data";

const styles = theme => ({
  root: {
    width: "100%",
    textAlign: "center",
    padding: theme.spacing.unit * 2
  },
  icons: {
    margin: "0 5px"
  }
});

const Footer = ({ classes, scrollToTopOfPage }) => {
  return (
    <footer className="Footer">
      <AppBar className={classes.root} position="static" color="primary">
        <Typography color="secondary" variant="h5">
          <RouterLink
            className="footer-link-home"
            onClick={scrollToTopOfPage}
            to="/"
          >
            &copy; {new Date().getFullYear()} {aboutMe ? aboutMe.name : null}{" "}
          </RouterLink>
          <div className="footer-links">
            {aboutMe &&
              aboutMe.links &&
              aboutMe.links.map(link => {
                const linkIcon = link.icon ? <link.icon /> : null;
                return (
                  <Link
                    className={classes.icons}
                    key={link.link}
                    href={link.link}
                    onClick={scrollToTopOfPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                    underline="none"
                  >
                    {linkIcon}
                  </Link>
                );
              })}
          </div>
        </Typography>
        <RouterLink onClick={scrollToTopOfPage} to="/secretpage">
          <FaReact className="footer-logo" />
        </RouterLink>
      </AppBar>
    </footer>
  );
};

export default withStyles(styles)(Footer);
