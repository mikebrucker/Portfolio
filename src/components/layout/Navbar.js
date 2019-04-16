import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { projects } from "../projects/projectsData";

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

    const sideMenu = (
      <div>
        <List>
          <ListSubheader className={classes.listSubHeader}>
            Projects
          </ListSubheader>
          {projects.map(project => {
            return (
              <Link
                key={project.id}
                color="secondary"
                component={RouterLink}
                underline="none"
                to={`/${project.name}`}
              >
                <ListItem button>
                  <ListItemText primary={project.name} />
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
