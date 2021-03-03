import React, { useContext, useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext, UserInfoType } from "../context";

const RegisterPage = styled.div``;

// Declaring props type
interface Props {
  setToken: (token: string) => void;
}

const Register = (props: Props) => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState<UserInfoType>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    authContext.register({
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
    <RegisterPage>
      <h1>Register now !</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            <input
              type="text"
              placeholder="Email"
              value={user.email || undefined}
              onChange={handleEmail}
            />
          </p>
        </label>
        <label>
          <p>
            <input
              type="password"
              placeholder="Password"
              value={user.password || undefined}
              onChange={handlePwd}
            />
          </p>
        </label>
        {authContext.loading && <LoadingSpinner />}
        {authContext.error && authContext.error}
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </RegisterPage>
  );
};

export default Register;
