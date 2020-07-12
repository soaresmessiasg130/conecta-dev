import React from "react";
import { useSelector } from 'react-redux';
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Bell } from "react-feather";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none",
  },
  img: {
    maxHeight: 40,
    paddingRight: 4,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginRight: 12,
  },
  bell: {
    marginRight: 12,
  },
});

export default function Header() {
  const styles = useStyles();
  const user = useSelector(state => state.user);
  
  return (
    <AppBar position="fixed" color="inherit" className={styles.appBar}>
      <ToolBar>
        <img
          src="images/logo.png"
          alt="private class >"
          className={styles.img}
        />
        <div className={styles.grow}></div>
        <div className={styles.userSection}>
          <Button variant="contained" color="primary" className={styles.button}>
            New Post
          </Button>
          <SvgIcon className={styles.bell}>
            <Bell />
          </SvgIcon>
          <Avatar alt="Messias Soares" src={user && user.avatar} />
        </div>
      </ToolBar>
    </AppBar>
  );
}
