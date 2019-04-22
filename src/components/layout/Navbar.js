import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { projects, aboutMe } from "../../data";

const styles = theme => ({
  title: {
    flex: 1,
    textAlign: "left",
    fontSize: "2.5em",
    fontFamily: "Metal Mania, serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7em"
    },
    transition: "color 0.33s",
    "&:hover": {
      color: "antiquewhite"
    },
    "& svg": {
      verticalAlign: "-10%"
    }
  },
  appBar: {
    overflow: "hidden",
    position: "sticky",
    top: 0,
    bottom: "auto",
    zIndex: "11"
  },
  background: {
    backgroundColor: "#00bcd4"
  },
  openDrawer: {
    backgroundColor: "#00bcd4",
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
  sideMenuItem: {
    transition: "0.33s all",
    "&:hover": {
      color: "antiquewhite",
      backgroundColor: "#006064"
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

    // navMenu is all the links with just icons to be shown in nav when browser is 960px width or bigger
    // Projects: Projects
    // Personal: Profile, External Links
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
                to={`/${project.name.replace(/\s/g, "")}`}
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
          to={`/${aboutMe.type.replace(/\s/g, "")}`}
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

        {aboutMe &&
          aboutMe.links &&
          aboutMe.links.map(about => {
            const aboutMeIcon = about.icon ? (
              <about.icon className={classes.navMenuSVG} />
            ) : null;
            return (
              <Link
                className={classes.navMenuLink}
                key={about.name}
                href={about.link}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
                underline="none"
              >
                <IconButton className={classes.navMenuLink} color="secondary">
                  {aboutMeIcon}
                </IconButton>
              </Link>
            );
          })}
      </div>
    );

    // sideMenu is all the links with names to pop over the screen on the right when menu button is clicked
    // Projects: Projects
    // Personal: Profile, External Links
    const sideMenu = (
      <List className={classes.background}>
        <h6 className={classes.listSubHeader}>Projects</h6>
        {projects &&
          projects.map(project => {
            const projectIcon = project.icon ? <project.icon /> : null;
            return (
              <Link
                key={project.id}
                to={`/${project.name.replace(/\s/g, "")}`}
                component={RouterLink}
                color="secondary"
                underline="none"
              >
                <ListItem className={classes.sideMenuItem} button>
                  {projectIcon}&nbsp;{project.name}
                </ListItem>
              </Link>
            );
          })}

        <h6 className={classes.listSubHeader}>Personal</h6>
        <Link
          to={`/${aboutMe.type.replace(/\s/g, "")}`}
          component={RouterLink}
          color="secondary"
          underline="none"
        >
          <ListItem className={classes.sideMenuItem} button>
            {aboutMe && aboutMe.icon ? <aboutMe.icon /> : null}
            &nbsp;
            {aboutMe && aboutMe.type ? aboutMe.type : null}
          </ListItem>
        </Link>

        {aboutMe &&
          aboutMe.links &&
          aboutMe.links.map(link => {
            const linkIcon = link.icon ? <link.icon /> : null;
            return (
              <Link
                key={link.link}
                className={classes.sideMenuItem}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
                underline="none"
              >
                <ListItem className={classes.sideMenuItem} button>
                  {linkIcon}&nbsp;{link.name}
                </ListItem>
              </Link>
            );
          })}
      </List>
    );

    return (
      <nav className={classes.appBar}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link
              className={classes.title}
              onClick={this.props.scrollToTopOfPage}
              color="secondary"
              component={RouterLink}
              underline="none"
              to="/"
            >
              <aboutMe.icon /> {aboutMe ? aboutMe.name : null}
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
