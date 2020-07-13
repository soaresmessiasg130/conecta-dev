import React, { useEffect, useCallback } from 'react';
import AuthService from '../../services/auth';
import { SetUserData } from '../../store/actions/AccountAction';
import { useDispatch } from 'react-redux';

function Auth ({ children }) {
  const dispatch = useDispatch();

  const initAuth = useCallback(async () => {
    if (AuthService.isAuthenticated()) {
      await dispatch(SetUserData());
    }
  }, [dispatch]);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return children;
}

export default Auth;
