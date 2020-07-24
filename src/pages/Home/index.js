import React from "react";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Feed from "../Feed";
import NewPost from "../Post/New";
import NotFound from "../NotFound";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: "100vh",
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  }
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.toolbar}></div>

      <main className={classes.main}>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/post/new' element={<NewPost />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default Home;
