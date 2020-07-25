import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'red',
    height: 'calc(100% - 70px)',
    overflow: 'scroll'
  },
  appBar: {
    top: 'auto',
    bottom: '0',
    alignItems: 'center'
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

function New() {
  const styles = useStyles();

  return (
    <>
      <Box display='flex' className={styles.root}>
        <Box>Editor</Box>
        <Box>Resultado</Box>
      </Box>

      <AppBar position='fixed' color='inherit' className={styles.appBar}>
        <Toolbar>
          <Button className={styles.button}>
            Salvar Rascunho
          </Button>

          <Button color='secondary' variant='outlined' className={styles.button}>
            Publicar
          </Button>
        </Toolbar>
      </AppBar>
    </>
);
}

export default New;
