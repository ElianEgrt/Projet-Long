import React from "react";

import styled from "styled-components";
import { MessageType } from "../containers/Chatbox";

const Container = styled.div`
  background: lightblue;
  height: auto;
  padding: ${(props) => props.theme.metrics.extraSmallSize};
  text-align: center;
  justify-self: end;
  display: flex;
  flex-direction: row;
`;

const MessageInput = styled.input`
  background: lightblue;
  height: auto;
  padding: ${(props) => props.theme.metrics.extraSmallSize};
  text-align: center;
  justify-self: end;
  display: flex;
  flex-direction: row;
`;

const SendButton = styled.button`
  background-color: lightcyan;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: cyan;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

interface Props {
  sendFunc: (message: MessageType) => void;
}

interface State {
  text: string;
}

class Message extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: "Type your message here !",
    };
  }

  handleInputChange = (e: any) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <MessageInput
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <SendButton
          onClick={() =>
            this.props.sendFunc({
              message: this.state.text,
              userSent: true,
            })
          }
        >
          Send
        </SendButton>
      </Container>
    );
  }
}

export default Message;
