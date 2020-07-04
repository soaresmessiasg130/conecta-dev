import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
