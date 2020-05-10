import React from "react";
import "./styles.css";

function Home() {
  return (
    <div>
      <header className="header">
        <div className="toolbar">
          <div>
            <a href="/">Conecta Dev</a>
            <input type="text" />
          </div>

          <div>
            <button>Nova Postagem</button>
            <span>Img 1</span>
            <span>Img 2</span>
          </div>
        </div>
      </header>

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
