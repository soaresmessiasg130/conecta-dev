import React from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    maxWidth: "1080px",
    height: "100vh",
    margin: "0 auto",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />

      <div className="header"></div>

      <main className={classes.main}>
        <NavBar />
        <Feed />
      </main>
    </div>
  );
}

export default Home;
