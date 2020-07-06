import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh'
  },
  left: {
    background: 'red',
    // flexGrow: 1,
    flexBasis: '42%',
  },
  right: {
    // background: 'yellow',
    // flexGrow: 1
    flexBasis: '58%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '64px 48px',
    alignItems: 'center'
  }
}));

function SignIn () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <form className={classes.form}>
          <Typography variant='h6'>Acesso</Typography>
          <input type='text' />
          <input type='text' />
        </form>
      </div>

      <div className={classes.right}>
        <Typography variant='h1' style={{color: '#FFF'}}>
          <strong>Uma rede social para Devs</strong>
        </Typography>

        <Typography variant='body2' style={{color: '#FFF'}}>
          Fale sobre suas experiências, compartilhe seu código e ajude a comunidade
        </Typography>
      </div>
    </div>
  );
}

export default SignIn;
