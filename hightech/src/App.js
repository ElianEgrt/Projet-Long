import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";

import Home from "./containers/Home";
import Chatbox from "./containers/Chatbox";
import Tutorial from "./containers/Tutorial";
import Navbar from "./components/Navbar";
import theme from "./styles";
import Cookie from "./components/Cookie";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tutorial" component={Tutorial} /> 
          {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} />
          {/* <Route path='/default' render={() => <Redirect to= "/" />} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Chatbox />
        <Cookie />
      </ThemeProvider>
    </Router>
  );
}

export default App;
