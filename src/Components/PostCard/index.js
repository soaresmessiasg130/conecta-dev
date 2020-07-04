import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  Avatar,
  IconButton
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    display: "flex",
    alignItems: "center"
  },
  subheaderItem: {
    marginRight: theme.spacing()
  },
  messages: {
    height: "auto",
    marginBottom: theme.spacing(2),
    padding: "0 24px"
  },
  image: {
    height: 300,
    width: "100%",
    maxWidth: "100%"
  },
  content: {
    padding: 0
  },
  favorite: {
    marginLeft: "auto"
  }
}));

function PostCard ({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={post.author.avatar} />}
        title={
          <Typography variant="h6">{post.title}</Typography>
        }
        subheader={
          <div className={classes.subheader}>
            <Typography
              variant="caption"
              className={classes.subheaderItem}>{'Avaliado por'}</Typography>
            <Typography
              variant="subtitle2"
              className={classes.subheaderItem}>{post.author.name}</Typography>
            <Typography
              variant="caption"
              className={classes.subheaderItem}>{post.date}</Typography>
          </div>
        }
      />

      <CardContent>
        <Typography className={classes.messages} variant="body1">{post.hashtags}</Typography>

        <CardActionArea className={classes.content}>
          <img src={post.image} className={classes.image} alt={"img"}/>
        </CardActionArea>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
          <Typography
            style={{cursor: "pointer"}}
            color="textSecondary"
            variant="body2"
          >
            {"10"}
          </Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <MessageIcon />
          <Typography
            className
            color="textSecondary"
            variant="body2"
          >
            {"20"}
          </Typography>
        </IconButton>
        <IconButton aria-label="favorite" className={classes.favorite}>
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard;
