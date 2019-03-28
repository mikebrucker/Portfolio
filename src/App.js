import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/layout/Navbar";
import Splash from "./components/layout/Splash";
import Footer from "./components/layout/Footer";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./material-ui-theme/theme";
import { CssBaseline } from "@material-ui/core";

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
            </Switch>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
