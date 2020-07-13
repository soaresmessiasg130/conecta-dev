import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Menu,
  MenuItem
} from '@material-ui/core';
import { SignOut } from '../../../../../store/actions/AccountAction';
import { useDispatch } from 'react-redux';

function Account () {
  const account = useSelector(state => state.account);
  const isAuthenticated = !!account.user;
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuOpen = () => setMenuIsOpen(true);

  const handleMenuClose = () => setMenuIsOpen(false);

  const handleSignOut = () => {
    handleMenuClose();
    dispatch(SignOut());
    navigate('/signin');
  }

  const redirectSignIn = () => {
    navigate('/signin');
  }

  return (
    <>
      <Avatar
        ref={ref}
        alt='Messias Soares'
        src={account.user && account.user.avatar}
        onClick={handleMenuOpen}
      />
      {isAuthenticated ? (
        <Menu
          anchorEl={ref.current}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={menuIsOpen}
          onClose={handleMenuClose}
        >
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Meus Favoritos</MenuItem>
          <MenuItem>Meus Posts</MenuItem>
          <MenuItem>Minhas Conexões</MenuItem>
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={ref.current}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={menuIsOpen}
          onClose={handleMenuClose}
        >
          <MenuItem>Registrar Grátis</MenuItem>
          <MenuItem onClick={redirectSignIn}>Entrar</MenuItem>
          <MenuItem>Fale Conosco</MenuItem>
        </Menu>
      )}
    </>
  );
}

export default Account;
