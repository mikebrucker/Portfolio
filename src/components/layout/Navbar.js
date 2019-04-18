import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import { projects, aboutMe } from "../projects/data";

const styles = theme => ({
  center: {
    flex: 1,
    textAlign: "center"
  },
  openDrawer: {
    backgroundColor: "#00e5ff",
    height: "100%",
    maxWidth: 320,
    width: "80vh"
  },
  listSubHeader: {
    borderBottom: "1px solid #424242"
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

    // sideMenu has Projects listed and My personal links listed
    const sideMenu = (
      <div>
        <List>
          <ListSubheader className={classes.listSubHeader}>
            Projects
          </ListSubheader>
          {projects &&
            projects.map(project => {
              const projectIcon = project.icon ? (
                <project.icon className="sidebar-icon" />
              ) : null;
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
          <ListSubheader className={classes.listSubHeader}>
            Mike Brucker
          </ListSubheader>
          <RouterLink to="/profile" color="secondary" underline="none">
            <ListItem button>
              {aboutMe && aboutMe.name ? aboutMe.name : null}
            </ListItem>
          </RouterLink>
          {aboutMe &&
            aboutMe.links &&
            aboutMe.links.map(link => {
              const linkIcon = link.icon ? (
                <link.icon className="sidebar-icon" />
              ) : null;
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
      </div>
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
              <Typography color="secondary" variant="h4" noWrap>
                Mike Brucker
              </Typography>
            </Link>
            <IconButton
              onClick={this.toggleDrawer}
              color="secondary"
              aria-label="Open drawer"
            >
              <MenuIcon />
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
