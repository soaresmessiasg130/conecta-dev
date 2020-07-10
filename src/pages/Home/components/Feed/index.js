import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostCard from '../../../../Components/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const Posts = [
  {
    id: 0,
    author: {
      id: 1,
      name: "Messias Soares",
      username: "messzsoarz",
      avatar: "/images/avatars/blackholesemfundo.png"
    },
    title: "Criando um App do zero utilizando ReactJs",
    date: "Aug 12, 2020",
    description: "Fala galera, qual o framework preferido de vocês?",
    hashtags: "#dotnet, #javascript, #react, #developer, #flutter",
    image: "/images/posts/post2.png"
  },
  {
    id: 1,
    author: {
      id: 1,
      name: "Messias Soares",
      username: "messzsoarz",
      avatar: "/images/avatars/blackholesemfundo.png"
    },
    title: "Criando um App do zero utilizando ReactJs",
    date: "Aug 12, 2020",
    description: "Fala galera, qual o framework preferido de vocês?",
    hashtags: "#dotnet, #javascript, #react, #developer, #flutter",
    image: "/images/posts/post8.png"
  },
  {
    id: 2,
    author: {
      id: 1,
      name: "Messias Soares",
      username: "messzsoarz",
      avatar: "/images/avatars/blackholesemfundo.png"
    },
    title: "Criando um App do zero utilizando ReactJs",
    date: "Aug 12, 2020",
    description: "Fala galera, qual o framework preferido de vocês?",
    hashtags: "#dotnet, #javascript, #react, #developer, #flutter",
    image: "/images/posts/post9.jpeg"
  },
  {
    id: 3,
    author: {
      id: 1,
      name: "Messias Soares",
      username: "messzsoarz",
      avatar: "/images/avatars/blackholesemfundo.png"
    },
    title: "Criando um App do zero utilizando ReactJs",
    date: "Aug 12, 2020",
    description: "Fala galera, qual o framework preferido de vocês?",
    hashtags: "#dotnet, #javascript, #react, #developer, #flutter",
    image: "/images/posts/post1.png"
  },
  {
    id: 4,
    author: {
      id: 1,
      name: "Messias Soares",
      username: "messzsoarz",
      avatar: "/images/avatars/blackholesemfundo.png"
    },
    title: "Criando um App do zero utilizando ReactJs",
    date: "Aug 12, 2020",
    description: "Fala galera, qual o framework preferido de vocês?",
    hashtags: "#dotnet, #javascript, #react, #developer, #flutter",
    image: "/images/posts/post9.jpeg"
  },
  {
    id: 5,
    author: {
      id: 1,
      name: "Messias Soares",
      username: "messzsoarz",
      avatar: "/images/avatars/blackholesemfundo.png"
    },
    title: "Criando um App do zero utilizando ReactJs",
    date: "Aug 12, 2020",
    description: "Fala galera, qual o framework preferido de vocês?",
    hashtags: "#dotnet, #javascript, #react, #developer, #flutter",
    image: "/images/posts/post9.jpeg"
  },
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
