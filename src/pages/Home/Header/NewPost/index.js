import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

function NewPost() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/post/new');
  }

  return (
    <Button variant='contained' color='primary' onClick={handleClick}>
      New Post
    </Button>
  );
}

export default NewPost;
