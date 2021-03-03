import React, { useContext, useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext, UserInfoType } from "../context";
import { GoSignIn } from "react-icons/go";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const RegisterWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
  padding: 0.5em;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const RegisterForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

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
    <Wrapper>
      <RegisterWrapper>
        <RegisterTitle>Register now!</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          <label>
            <Input
              type="text"
              placeholder="Email"
              value={user.email}
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
                  <GoSignIn />
                )
              }
            >
              Register
            </Button>
          </label>
          <label>
            {authContext.error ? "Error : " + authContext.error : ""}
          </label>
        </RegisterForm>
      </RegisterWrapper>
    </Wrapper>
  );
};

export default Register;
