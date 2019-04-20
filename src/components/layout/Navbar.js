import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { projects, aboutMe } from "../projects/data";

const styles = theme => ({
  center: {
    flex: 1,
    textAlign: "left",
    transition: "color 0.33s",
    "&:hover": {
      color: "antiquewhite"
    }
  },
  background: {
    backgroundColor: "#00e5ff"
  },
  openDrawer: {
    backgroundColor: "#00e5ff",
    height: "100%",
    minWidth: "240px",
    width: "30vw"
  },
  menuIcon: {
    transition: "fill 0.33s",
    "&:hover": {
      fill: "antiquewhite"
    }
  },
  listSubHeader: {
    borderBottom: "1px solid #424242",
    padding: "20px 0 6px 36px",
    textAlign: "left",
    margin: "0 auto"
  },
  title: {
    fontSize: "3vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px"
    }
  },
  navMenu: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  navMenuLink: {
    display: "inline-block",
    "&:hover": {
      "& svg": {
        fill: "antiquewhite"
      }
    }
  },
  navMenuSVG: {
    transition: "fill 0.33s"
  }
});

class Navbar extends Component {
  state = {
    drawer: false
  };

  toggleDrawer = () => {
    this.setState({
      drawer: !this.state.drawer
    });
  };

  render() {
    const { classes } = this.props;

    const navMenu = (
      <div className={classes.navMenu}>
        {projects &&
          projects.map(project => {
            const projectIcon = project.icon ? (
              <project.icon className={classes.navMenuSVG} />
            ) : null;
            return (
              <Link
                className={classes.navMenuLink}
                key={project.id}
                to={`/${project.name}`}
                component={RouterLink}
                color="secondary"
                underline="none"
              >
                <IconButton className={classes.navMenuLink} color="secondary">
                  {projectIcon}
                </IconButton>
              </Link>
            );
          })}
        <Link
          className={classes.navMenuLink}
          to="/profile"
          component={RouterLink}
          color="secondary"
          underline="none"
        >
          <IconButton className={classes.navMenuLink} color="secondary">
            {aboutMe && aboutMe.icon ? (
              <aboutMe.icon className={classes.navMenuSVG} />
            ) : null}
          </IconButton>
        </Link>
      </div>
    );

    // sideMenu has Projects listed and My personal links listed
    const sideMenu = (
      <List className={classes.background}>
        <h6 className={classes.listSubHeader}>Projects</h6>
        {projects &&
          projects.map(project => {
            const projectIcon = project.icon ? <project.icon /> : null;
            return (
              <Link
                key={project.id}
                to={`/${project.name}`}
                component={RouterLink}
                color="secondary"
                underline="none"
              >
                <ListItem button>
                  {projectIcon}&nbsp;{project.name}
                </ListItem>
              </Link>
            );
          })}
        <h6 className={classes.listSubHeader}>Personal</h6>
        <RouterLink to="/profile" color="secondary" underline="none">
          <ListItem button>
            {aboutMe && aboutMe.icon ? <aboutMe.icon /> : null}
            &nbsp;
            {aboutMe && aboutMe.name ? aboutMe.name : null}
          </ListItem>
        </RouterLink>
        {aboutMe &&
          aboutMe.links &&
          aboutMe.links.map(link => {
            const linkIcon = link.icon ? <link.icon /> : null;
            return (
              <Link
                key={link.link}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
                underline="none"
              >
                <ListItem button>
                  {linkIcon}&nbsp;{link.name}
                </ListItem>
              </Link>
            );
          })}
      </List>
    );

    return (
      <nav id="topOfPage" className="Navbar">
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Link
              className={classes.center}
              color="secondary"
              component={RouterLink}
              underline="none"
              to="/"
            >
              <div className={classes.title}>Mike Brucker Portfolio</div>
            </Link>
            {navMenu}
            <IconButton
              className={classes.navMenuLink}
              onClick={this.toggleDrawer}
              color="secondary"
              aria-label="Open drawer"
            >
              <MenuIcon className={classes.navMenuSVG} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={this.state.drawer}
          onClose={this.toggleDrawer}
        >
          <div
            className={classes.openDrawer}
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideMenu}
          </div>
        </Drawer>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
