import React, { useContext, useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext, UserInfoType } from "../context";

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
`;

// Declaring props type
interface Props {
  setToken: (token: string) => void;
}

const Login = (props: Props) => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState<UserInfoType>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    authContext.login({
      email: user.email,
      password: user.password,
    });
  };

  const handleEmail = (e: { target: { value: string } }) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePwd = (e: { target: { value: string } }) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    // fake username, just for fun
    // TODO: Log in button
    <Wrapper>
      <h1>Log in now !</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            <input
              type="text"
              placeholder="Email"
              value={user.email}
              onChange={handleEmail}
            />
          </p>
        </label>
        <label>
          <p>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handlePwd}
            />
          </p>
        </label>
        {authContext.loading && <LoadingSpinner />}
        {authContext.error && authContext.error}
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;
