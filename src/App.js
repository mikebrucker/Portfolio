import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/layout/Navbar";
import Splash from "./components/layout/Splash";
import Footer from "./components/layout/Footer";
import Project from "./components/projects/Project";
import ReactLogo from "./components/layout/ReactLogo";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./material-ui-theme/theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route exact path="/:project" component={Project} />
              <Route exact path="/spinninglogo" component={ReactLogo} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
