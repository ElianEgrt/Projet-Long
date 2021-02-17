import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';

import Home from './containers/Home'
import theme from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
