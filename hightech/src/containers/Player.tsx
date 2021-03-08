import React from "react";
import ReactAwesomePlayer from "react-awesome-player";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.726);
  height: 83%;
  padding: 1rem;
  .test-demo {
    margin: 0% 15% 0% 15%;
  }
`;

class Player extends React.Component {
  state = {
    options: {
      muted: true,
      poster:
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=854361313,3188166359&fm=26&gp=0.jpg",
      sources: [
        {
          type: "video/mp4",
          src:
            "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
        },
      ],
    },
  };
  loadeddata() {
    console.log("loadeddata");
  }
  canplay() {
    console.log("canplay");
  }
  canplaythrough() {
    console.log("canplaythrough");
  }
  play() {
    console.log("play");
  }
  pause() {
    console.log("pause");
  }
  waiting() {
    console.log("waiting");
  }
  playing() {
    console.log("playing");
  }
  ended() {
    console.log("ended");
  }
  error() {
    console.log("error");
  }

  render() {
    const { options } = this.state;
    return (
      <Wrapper>
        <div className="test-demo">
          <ReactAwesomePlayer
            onRef={(video: any) => {}}
            options={options}
            loadeddata={this.loadeddata}
            canplay={this.canplay}
            canplaythrough={this.canplaythrough}
            play={this.play}
            pause={this.pause}
            waiting={this.waiting}
            playing={this.playing}
            ended={this.ended}
            error={this.error}
          />
        </div>
      </Wrapper>
    );
  }
}

export default Player;
