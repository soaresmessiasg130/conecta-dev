import React from 'react';
import { Route } from 'react-router-dom';
import auth from '../services/auth';
import Home from '../pages/Home';

function GuestRoute ({ element: Component, ...rest }) {
  const isAuthenticated = auth.isAuthenticated();

  return (
    <Route {...rest} element={(
        isAuthenticated
        ? <Home />
        : Component
    )}/>
  );
}

export default GuestRoute;
