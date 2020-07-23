import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Popover
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Account from './Account';
import Notification from './Notification';
import NewPost from "./NewPost";

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
          <Box ml={2}>
            <NewPost />
          </Box>

          <Box ml={2}>
            <Notification />
          </Box>

          <Box ml={2}>
            <Account />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}
