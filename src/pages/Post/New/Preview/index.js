import React from 'react';
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Divider,
  Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Markdown from 'react-markdown';

import { usePost } from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
  imagePreview: {
    width: '100%',
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

function Preview() {
  const account = useSelector(state => state.account);
  const styles = useStyles();

  const {
    image,
    title,
    tags,
    text,
  } = usePost();

  return (
    <>
      <Box display='flex' alignItems='center'>
        <Box mb={1} className={styles.avatar}>
          <Avatar src={account.user?.avatar} />
        </Box>

        <Box mb={1}>
          <Typography variant='body1'>{account.user?.name}</Typography>

          <Typography variant='body2'>10 meses atrás</Typography>
        </Box>
      </Box>

      { image &&
        <Box mb={1}>
          <img className={styles.imagePreview} src={image} alt='background' />
        </Box>
      }

      <Box mb={1}>
        <Typography variant='h2'>{title}</Typography>
      </Box>

      <Box mb={1}>
        <Typography variant='h5'>{tags.map(item => (`#${item.title} `))}</Typography>
      </Box>

      <Divider />

      <Markdown source={text} />
    </>
  );
}

export default Preview;
