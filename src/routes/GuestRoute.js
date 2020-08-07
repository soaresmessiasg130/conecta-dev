import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';

function GuestRoute ({ element: Component, ...rest }) {
  const account = useSelector(state => state.account);
  const isAuthenticated = Boolean(account.user);

  return (
    <Route {...rest} element={(
        isAuthenticated
        ? <Home />
        : Component
    )}/>
  );
}

export default GuestRoute;
