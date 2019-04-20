import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Splash from "./components/layout/Splash";
import Footer from "./components/layout/Footer";
import Project from "./components/projects/Project";
import Profile from "./components/profile/Profile";
import ReactLogo from "./components/layout/ReactLogo";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./material-ui-theme/theme";

class App extends Component {
  scrollToTopOfPage = () => {
    document.getElementById("topOfPage").scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });
  };

  scrollToProfileSummary = () => {
    document.getElementById("topOfProfileSummary").scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Splash
                  {...props}
                  scrollToProfileSummary={this.scrollToProfileSummary}
                  scrollToTopOfPage={this.scrollToTopOfPage}
                />
              )}
            />
            <Route exact path="/spinninglogo" component={ReactLogo} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/:project" component={Project} />
          </Switch>
          <div className="footer-grow" />
          <Footer scrollToTopOfPage={this.scrollToTopOfPage} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
