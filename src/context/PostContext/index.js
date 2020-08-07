import React, { createContext, useState, useContext } from 'react';

const PostContext = createContext();

function PostProvider({ children }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [text, setText] = useState('');

  const handleTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleTags = (event, values) => {
    setTags(values);
  };

  const handleMarkdown = (event) => {
    setText(event.currentTarget.value);
  };

  return (
    <PostContext.Provider
    value={{
      image,
      setImage,
      title,
      setTitle: handleTitle,
      tags,
      setTags: handleTags,
      text,
      setText: handleMarkdown
    }}>
      {children}
    </PostContext.Provider>
  );
}

function usePost () {
  const context = useContext(PostContext);

  const {
    image,
    setImage,
    title,
    setTitle,
    tags,
    setTags,
    text,
    setText
  } = context;

  return {
    image,
    setImage,
    title,
    setTitle,
    tags,
    setTags,
    text,
    setText
  };
}

export { usePost, PostProvider };
