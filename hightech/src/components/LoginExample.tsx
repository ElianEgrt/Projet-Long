import React, { useState } from "react";
import styled from "styled-components";

const LoginPage = styled.div``;

// Class component

// Declaring props type
interface Props {
  setToken: (token: string) => void;
}

// Declaring state type
interface State {
  username: string;
  password: string;
}

// Declaring Class component
class LoginClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <LoginPage>
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input
              type="text"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="text"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </LoginPage>
    );
  }
}

// Declaring functionnal component

// Declaring props type
interface Props {
  setToken: (token: string) => void;
}

// Declaring Functionnal component (no state -> use hooks)
const LoginFunction = (props: Props) => {
  // You can use Hooks here!
  const [username, setUsername] = useState<string>();
  const [passworld, setPassword] = useState<string>();

  return (
    <LoginPage>
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </LoginPage>
  );
};

export { LoginClass, LoginFunction };
