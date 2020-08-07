import React from 'react';
import { TextField } from "@material-ui/core";
import { usePost } from '../../../../context/PostContext';

function Title() {
  const { title, setTitle } = usePost();

  return (
    <TextField
      id='title'
      placeholder='Título do Post'
      fullWidth
      onChange={setTitle}
      value={title}/>
  );
}

export default Title;
