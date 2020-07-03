import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostCard from '../../../../Components/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const Posts = [
  {id: 1, title: 'Post 1'},
  {id: 2, title: 'Post 2'},
  {id: 3, title: 'Post 3'},
  {id: 4, title: 'Post 4'},
  {id: 5, title: 'Post 5'},
];



function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Posts.map((item) => (
        <PostCard key={item.id} post={item}/>
      ))}
    </div>
  )
}

export default Feed;
