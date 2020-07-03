import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CardHeader,
  CardContent,
  CardActions,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  root: {}
});


function PostCard ({ post }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardHeader>

      </CardHeader>

      <CardContent>

      </CardContent>

      <CardActions>

      </CardActions>
    </div>
  )
}

export default PostCard;
