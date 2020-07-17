import React from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  SvgIcon
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Bell } from 'react-feather';
import Account from './Account';
import Notification from './Notification';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
  },
  img: {
    maxHeight: 40,
    paddingRight: 4,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginRight: 12,
  },
  bell: {
    marginRight: 12,
  },
});

export default function Header() {
  const styles = useStyles();

  return (
    <AppBar position='fixed' color='inherit' className={styles.appBar}>
      <Toolbar>
        <img
          src='images/logo.png'
          alt='private class >'
          className={styles.img}
        />
        <div className={styles.grow}></div>
        <div className={styles.userSection}>
          <Button variant='contained' color='primary' className={styles.button}>
            New Post
          </Button>
          <Notification />
          <Account />
        </div>
      </Toolbar>
    </AppBar>
  );
}
