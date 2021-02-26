import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";

import Home from "./containers/Home";
import Chatbox from "./containers/Chatbox";
import Tutorial from "./containers/Tutorial";
import Navbar from "./components/Navbar";
import theme from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Chatbox />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tutorial" component={Tutorial} />
        {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} /> */}
        {/* <Route path='/default' render={() => <Redirect to= "/" />} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </ThemeProvider>
  );
}

export default App;
