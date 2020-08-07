
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store';
import { ThemeProvider } from '@material-ui/core/styles';
import Auth from './components/Auth';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import GuestRoute from './routes/GuestRoute';

import './mock';
import theme from './theme';

function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <GuestRoute path='/signin' element={<SignIn />} />
              <Route path="//*" element={<Home />} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
