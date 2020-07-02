import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
  },
  button: {
    width: '100%'
  }
}));

const Tags = [
  {id: 1, name: 'reacjs'},
  {id: 2, name: 'flutter'},
  {id: 3, name: 'dotnet'},
  {id: 4, name: 'php'},
  {id: 5, name: 'reactnative'},
  {id: 6, name: 'javascript'},
  {id: 7, name: 'webdev'},
];

function NavBar() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Button
        variant="outlined"
        color="secondary"
        className={classes.button}>Registrar-se Grátis</Button>

      <ListSubheader>Tags em Alta</ListSubheader>

      {Tags.map((item) => (
        <ListItem dense button key={`item-${item.id}-${item.name}`}>
          <ListItemText primary={`#${item.name}`} />
        </ListItem>
      ))}

      <ListItem button>
        Exibir Mais Tags
      </ListItem>
    </Paper>
  )
}

export default NavBar;
