import React, { useCallback } from 'react';
import {
  Box,
  Button,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDropzone } from 'react-dropzone';
import { Autocomplete } from '@material-ui/lab';

import Title from "./Title";

import { usePost } from '../../../../context/PostContext';

const useStyles = makeStyles((theme) => ({
  image: {
    height: '100px',
  },
  textArea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    padding: '8px',
    background: 'transparent'
  },
}));


function Editor() {
  const styles = useStyles();

  const {
    image,
    setImage,
    tags,
    setTags,
    text,
    setText,
  } = usePost();

  const allTags = [
    { title: 'reacjs', value: 'reacjs' },
    { title: 'flutter', value: 'flutter' },
    { title: 'dotnet', value: 'dotnet' },
    { title: 'php', value: 'php' },
    { title: 'reactnative', value: 'reactnative' },
    { title: 'javascript', value: 'javascript' },
    { title: 'webdev', value: 'webdev' }
  ];

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);

    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64Data = reader.result;
      setImage(base64Data);
    };
  }, [setImage]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*'
  });

  return (
    <>
      <Box mb={1}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Button>Carregar Imagem</Button>
        </div>
      </Box>

      { image &&
        <Box mb={1}>
          <img className={styles.image} src={image} alt='background' />
        </Box>
      }

      <Box mb={1}>
        <Title />
      </Box>

      <Box mb={1}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={allTags}
          getOptionLabel={(option) => option.title}
          defaultValue={[allTags[3]]}
          filterSelectedOptions
          value={tags}
          onChange={setTags}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="tags"
            />
          )}
        />
      </Box>

      <Box mb={1}>
        <textarea
          className={styles.textArea}
          placeholder='Escreva o conteúdo do Post...'
          onChange={setText}
          value={text}></textarea>
      </Box>
    </>
  );
}

export default Editor;
