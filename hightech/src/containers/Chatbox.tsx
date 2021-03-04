import React from "react";
import styled from "styled-components";
import Message from "../components/Message";
import SendMessageForm from "../components/SendMessageForm";
import { SiProbot } from "react-icons/si";
import ChatHeader from "../components/ChatHeader";
import { IconContext } from "react-icons";
import { RouteComponentProps } from "react-router-dom";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  height: 50%;
  width: 25%;
  position: fixed;
  right: ${(props) => props.theme.metrics.smallSize};
  bottom: ${(props) => props.theme.metrics.smallSize};
  box-shadow: 5px 5px 10px #000;
  display: flex;
  flex-direction: column;
`;

const MinimizedContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  height: 8em;
  width: 8em;
  border-radius: 4em;
  position: fixed;
  right: ${(props) => props.theme.metrics.smallSize};
  bottom: ${(props) => props.theme.metrics.smallSize};
  box-shadow: 5px 5px 10px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    font-size: 1.05em;
  }
  transition: ease font-size 250ms;
`;

const MinimizedInnerContainer = styled.div`
  background-color: transparent;
  height: 6em;
  width: 6em;
  border: solid 5px ${(props) => props.theme.colors.backgroundColor};
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MinimizedMessageContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -70px;
  top: -30px;
`;

const ConversationContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.metrics.extraSmallSize};
  overflow: auto;
`;

export type MessageType = { message: String; userSent: boolean };

interface State {
  messages: MessageType[];
  active: boolean;
}

interface Props {
  location?: any;
}

class Chatbox extends React.Component<Props, State> {
  messagesEnd: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      active: false,
      messages: [
        { message: "Bonjour ! Comment puis-je vous aider ?", userSent: false },
      ],
    };
  }

  componentDidMount() {
    this.state.active && this.scrollToBottom();
  }

  componentDidUpdate() {
    this.state.active && this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  handleActive = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  sendMessageFunc = (message: MessageType) => {
    this.setState({
      ...this.state,
      messages: this.state.messages.concat(message),
    });
  };

  render() {
    const location = this.props.location.pathname;

    if (location === "/play") {
      return <></>;
    } else {
      return this.state.active ? (
        <Container>
          <ChatHeader minimizeFunc={this.handleActive} />
          <ConversationContainer>
            {this.state.messages.map((message) => (
              <Message message={message} />
            ))}
            <div
              style={{ float: "left", clear: "both" }}
              ref={(el) => {
                this.messagesEnd = el;
              }}
            ></div>
          </ConversationContainer>
          <SendMessageForm sendFunc={this.sendMessageFunc} />
        </Container>
      ) : (
        <MinimizedContainer
          onClick={() => {
            this.handleActive();
          }}
        >
          <MinimizedMessageContainer>
            <Message
              message={{ message: "Besoin d'aide ?", userSent: false }}
            />
          </MinimizedMessageContainer>
          <MinimizedInnerContainer>
            <IconContext.Provider value={{ size: "4em" }}>
              <div>
                <SiProbot />
              </div>
            </IconContext.Provider>
          </MinimizedInnerContainer>
        </MinimizedContainer>
      );
    }
  }
}

export default Chatbox;
