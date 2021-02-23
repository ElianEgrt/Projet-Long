import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";

import Home from "./containers/Home";
import Chatbox from "./containers/Chatbox";
import theme from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Chatbox />
    </ThemeProvider>
  );
}

export default App;
