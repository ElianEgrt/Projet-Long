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
  ErrorType,
  useToken,
} from "./context";

function App() {
  const { token, setToken } = useToken();
  const [error, setError] = useState<ErrorType>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login: AuthContextType["login"] = async (user: UserInfoType) => {
    setLoading(true);
    setError(null);
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await fetch(
        "http://chanch.freeboxos.fr:12121/api/users/login",
        requestOptions
      );
      const data = await response.json();
      setLoading(false);
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else if (!data.user) {
        setError("could_not_log_in");
      } else {
        setError(null);
        setToken(data.user.token);
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
      setError("failed_to_fetch");
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
      "http://chanch.freeboxos.fr:12121/api/users/register",
      requestOptions
    );
    const data = await response.json();
    console.log(data);

    if (data.error) {
      setError(data.error);
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
            loading: loading,
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
