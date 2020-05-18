import React from "react";

import { Button } from "@material-ui/core";

import "./styles.css";

import Header from "./components/Header";

function Home() {
  return (
    <div>
      <Header />

      <div className="header"></div>

      <main className="main">
        <div className="nav">
          <p>Nav</p>
          <p>Nav</p>
          <p>Nav</p>
          <p>Nav</p>
          <p>Nav</p>
          <p>Nav</p>
          <p>Nav</p>
          <p>Nav</p>
        </div>
        <div className="content">
          <p>sajsajksn</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
