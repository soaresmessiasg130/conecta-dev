import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Box,
  Avatar,
  TextField,
  Button,
  Link,
  FormHelperText
} from '@material-ui/core';
import LockOutĺinedIcon from '@material-ui/icons/LockOutlined';
import auth from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: theme.palette.basics.bgWhite,
  },
  image: {
    backgroundImage: 'url(/images/login-background.jpg)',
    backgrounPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    textAlign: 'center'
  },
  avatar: {
    background: theme.palette.primary.main,
    margin: theme.spacing(2),
  },
  title: {
    color: '#FFF',
    border: '1px solid #fff',
    padding: theme.spacing(2),
    backdropFilter: 'blur(10px)'
    // borderRadius: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(2, 0)
  },
  form: {
    margin: theme.spacing(2, 4, 4, 4)
  }
}));

function Copyright () {
  return (
    <Typography variant='body2'>
      {'Copyright &copy;'}
      <a color='inherit' href='http://www.github.com/soaresmessiasg130'>
        Messias Soares
      </a>
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignIn () {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSignIn () {
    try {
      await auth.SignIn(email, password);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid
        md={7}
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.image}
      >
        <Typography variant='h1' className={classes.title}>
          <strong>Uma rede social para Devs</strong>
        </Typography>

        <Typography variant='body2' style={{color: '#FFF', marginTop: '24px'}}>
          <strong>
            Fale sobre suas experiências, compartilhe seu código e ajude a comunidade
          </strong>
        </Typography>
      </Grid>

      <Grid md={5} item>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          mt={1}
          >
          <Avatar className={classes.avatar}>
            <LockOutĺinedIcon />
          </Avatar>
          <Typography variant='h6'>
            Acesso
          </Typography>
          <form className={classes.form}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='E-mail'
              name='email'
              type='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Senha'
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            { errorMessage && (
              <FormHelperText error>
                {errorMessage}
              </FormHelperText>
            )}
            <Button
              onClick={handleSignIn}
              variant='contained'
              color='primary'
              fullWidth
              className={classes.button}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link>Esqueceu a senha?</Link>
              </Grid>
              <Grid item>
                <Link>Não tem conta? Registre-se</Link>
              </Grid>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;

// left: {
//   background: 'red',
//   // flexGrow: 1,
//   flexBasis: '42%',
// },
// right: {
//   // background: 'yellow',
//   // flexGrow: 1
//   flexBasis: '58%',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center'
// },
// form: {
//   display: 'flex',
//   flexDirection: 'column',
//   margin: '64px 48px',
//   alignItems: 'center'
// }

// <div className={classes.root}>
//   <div className={classes.left}>
//     <form className={classes.form}>
//       <Typography variant='h6'>Acesso</Typography>
//       <input type='text' />
//       <input type='text' />
//     </form>
//   </div>
//
//   <div className={classes.right}>
//     <Typography variant='h1' style={{color: '#FFF'}}>
//       <strong>Uma rede social para Devs</strong>
//     </Typography>
//
//     <Typography variant='body2' style={{color: '#FFF'}}>
//       Fale sobre suas experiências, compartilhe seu código e ajude a comunidade
//     </Typography>
//   </div>
// </div>
