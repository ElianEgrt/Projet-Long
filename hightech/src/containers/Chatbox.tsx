import React from "react";
import styled from "styled-components";
import Message from "../components/Message";
import SendMessageForm from "../components/SendMessageForm";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  height: 50%;
  width: 25%;
  position: absolute;
  right: ${(props) => props.theme.metrics.smallSize};
  bottom: ${(props) => props.theme.metrics.smallSize};
  box-shadow: 5px 5px 10px #000;
  display: flex;
  flex-direction: column;
`;

const ConversationContainer = styled.div`
  background-color: green;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: blue;
  height: ${(props) => props.theme.metrics.mediumSize};
`;

export type MessageType = { message: String; userSent: boolean };

interface State {
  messages: MessageType[];
}

interface Props {}

class Chatbox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      messages: [
        { message: "Wesh l'ékip !", userSent: true },
        { message: "bien ou bien ?", userSent: false },
      ],
    };
  }

  sendMessageFunc = (message: MessageType) => {
    this.setState({
      ...this.state,
      messages: this.state.messages.concat(message),
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <ConversationContainer>
          {this.state.messages.map((message) => (
            <Message message={message} />
          ))}
        </ConversationContainer>
        <SendMessageForm sendFunc={this.sendMessageFunc} />
      </Container>
    );
  }
}

export default Chatbox;
