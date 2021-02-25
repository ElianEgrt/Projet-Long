import React from "react";

import styled from "styled-components";
import { MessageType } from "../containers/Chatbox";
import { AiOutlineSend } from "react-icons/ai";

const Container = styled.div`
  height: auto;
  padding: ${(props) => props.theme.metrics.extraSmallSize};
  text-align: center;
  justify-self: end;
  display: flex;
  justify-content: space-between;
  border-top: solid 2px #a5a5a5;
`;

const MessageInput = styled.input`
  height: 100%;
  padding: ${(props) => props.theme.metrics.extraSmallSize};
  text-align: center;
  display: flex;
  flex-direction: row;
  margin: 0%;
  height: auto;
  border: none;
  background-color: transparent;
  outline: none;
`;

const SendButton = styled.div`
  color: #a5a5a5;
  font-size: ${(props) => props.theme.metrics.largeSize};
  cursor: pointer;
  &:hover {
    color: #000;
  }
  transition: ease color 250ms;
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
      text: "",
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
          value={this.state.text === "" ? "" : this.state.text}
          onChange={this.handleInputChange}
          placeholder="J'ai besoin d'aide pour..."
        />
        <SendButton
          onClick={() => {
            if (this.state.text !== "") {
              this.props.sendFunc({
                message: this.state.text,
                userSent: true,
              });
              this.setState({
                text: "",
              });
            }
          }}
        >
          <AiOutlineSend />
        </SendButton>
      </Container>
    );
  }
}

export default Message;
