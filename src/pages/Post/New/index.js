import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Editor from './Editor';
import Preview from './Preview';
import { PostProvider } from "../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'red',
    // height: 'calc(100% - 70px)',
    // overflow: 'scroll'
  },
  appBar: {
    top: 'auto',
    bottom: '0',
    alignItems: 'center'
  },
  image: {
    height: '100px',
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

function New() {
  const styles = useStyles();

  return (
    <PostProvider>
      <Box
        display='flex'
        height='calc(100% - 64px)'
        overflow='auto'>
        <Box width='50%' height='100%' padding={2} borderRight='1px solid #ddd'>
          <Editor />
        </Box>

        <Box width='50%' height='100%' padding={2}>
          <Preview />
        </Box>
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
    </PostProvider>
  );
}

export default New;
