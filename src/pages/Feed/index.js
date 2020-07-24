import React from "react";
import {
  Box,
  Container
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "./NavBar";
import PostList from "./PostList";

const useStyles = makeStyles(() => ({
  root: {}
}));

function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Box display="flex">
          <NavBar />

          <PostList />
        </Box>
      </Container>
    </div>
  )
}

export default Feed;
