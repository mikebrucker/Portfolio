import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Footer from "./components/Footer";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./material-ui-theme/theme";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <Splash />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
