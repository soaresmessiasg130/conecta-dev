import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

import theme from './theme';

import './mock';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
