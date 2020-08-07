import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NewPost() {
  const navigate = useNavigate();
  const account = useSelector(state => state.account);
  const isAuthenticated = !!account.user;

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/post/new');
    } else {
      navigate('/signin');
    }
  }

  return (
    <Button variant='contained' color='primary' onClick={handleClick}>
      New Post
    </Button>
  );
}

export default NewPost;
