import React, { useContext, useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext, UserInfoType } from "../context";
import { BiLogIn } from "react-icons/bi";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
  padding: 0.5em;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const LoginForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// Declaring props type
interface Props {
  setToken: (token: string) => void;
}

const Login = (props: Props) => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState<UserInfoType>({
    username: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    authContext.login({
      username: user.username,
      password: user.password,
    });
  };

  const handleEmail = (e: { target: { value: string } }) => {
    setUser({ ...user, username: e.target.value });
  };

  const handlePwd = (e: { target: { value: string } }) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <LoginTitle>Log in now !</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <label>
            <Input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={handleEmail}
            />
          </label>
          <label>
            <Input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handlePwd}
            />
          </label>
          <label>
            <Button
              size="large"
              variant="outlined"
              fullWidth={true}
              type="submit"
              startIcon={
                authContext.loading ? (
                  <LoadingSpinner size="0.5em" border="0.1em" />
                ) : (
                  <BiLogIn />
                )
              }
            >
              Sign in
            </Button>
          </label>
          <label>
            {authContext.error ? "Error : " + authContext.error : ""}
          </label>
        </LoginForm>
      </LoginWrapper>
    </Wrapper>
  );
};

export default Login;
