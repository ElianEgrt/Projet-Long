import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles";

import Home from "./containers/Home";
import Chatbox from "./containers/Chatbox";
import Tutorial from "./containers/Tutorial";
import UserProfile from "./containers/UserProfile";
import Navbar from "./containers/Navbar";
import Login from "./containers/Login";
import Register from "./containers/Register";

import Cookie from "./components/Cookie";

import {
  AuthContext,
  AuthContextType,
  UserInfoType,
  TokenType,
  ErrorType,
} from "./context";

function App() {
  const [token, setToken] = useState<TokenType>(null);
  const [error, setError] = useState<ErrorType>(null);

  const login: AuthContextType["login"] = async (user: UserInfoType) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    let response = await fetch(
      "http://localhost:8000/api/users/login",
      requestOptions
    );
    const data = await response.json();
    console.log(data);

    if (data.errors) {
      setError(data.errors);
    } else if (!data.user) {
      setError("could_not_log_in");
    } else {
      setError(null);
      setToken(data.user.token);
    }
  };

  const register: AuthContextType["register"] = async (user: UserInfoType) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    let response = await fetch(
      "http://localhost:8000/api/users/register",
      requestOptions
    );
    const data = await response.json();
    console.log(data);

    if (data.errors) {
      setError(data.errors);
    } else if (!data.user) {
      setError("could_not_register");
    } else {
      setError(null);
      setToken(data.user.token);
    }
  };

  const logout: AuthContextType["logout"] = () => {
    setToken(null);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider
          value={{
            token: token,
            error: error,
            register: register,
            login: login,
            logout: logout,
          }}
        >
          <GlobalStyle />
          <Navbar />
          <Switch>
            {token ? (
              <>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={Home} />
                <Route exact path="/tutorial" component={Tutorial} />
                <Route exact path="/profile" component={UserProfile} />
              </>
            ) : (
              <>
                <Redirect exact from="/home" to="/login" />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </>
            )}
          </Switch>
          <Chatbox />
          <Cookie />
        </AuthContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
