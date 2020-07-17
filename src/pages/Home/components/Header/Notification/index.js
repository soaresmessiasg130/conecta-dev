import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { Bell } from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  root: {

  }
}):

function Notification () {
  return (
    <SvgIcon className={styles.bell}>
      <Bell />
    </SvgIcon>
  );
}

export default Notification;
