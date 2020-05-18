import React from "react";

import { Button } from "@material-ui/core";

import "../../styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="toolbar">
        <div>
          <a href="/">Conecta Dev</a>
          <input type="text" />
        </div>

        <div>
          <Button variant="contained" color="primary">
            Nova Postagem
          </Button>
          <span>Img 1</span>
          <span>Img 2</span>
        </div>
      </div>
    </header>
  );
}
