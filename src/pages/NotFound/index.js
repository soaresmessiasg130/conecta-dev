import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.light,
    color: "#ffffff",
    textAlign: "center",
    width: '50vw',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(16)
  }
}));

function NotFound () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>401 - Not found!</h1>
      <h5>Nenhuma página foi encontrada!</h5>
    </div>
  );
}

export default NotFound;
