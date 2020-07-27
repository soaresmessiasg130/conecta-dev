import React, { useState, useCallback } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  TextField
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'red',
    // height: 'calc(100% - 70px)',
    // overflow: 'scroll'
  },
  appBar: {
    top: 'auto',
    bottom: '0',
    alignItems: 'center'
  },
  image: {
    height: '100px',
  },
  imagePreview: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(2),
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
  }
}));

function New() {
  const styles = useStyles();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [text, seText] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);

    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64Data = reader.result;
      setImage(base64Data);
    };
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*'

  });

  const allTags = [
    { title: 'reacjs', value: 'reacjs' },
    { title: 'flutter', value: 'flutter' },
    { title: 'dotnet', value: 'dotnet' },
    { title: 'php', value: 'php' },
    { title: 'reactnative', value: 'reactnative' },
    { title: 'javascript', value: 'javascript' },
    { title: 'webdev', value: 'webdev' }
  ]

  return (
    <>
      <Box
        display='flex'
        height='calc(100% - 64px)'
        overflow='auto'>
        <Box width='50%' height='100%' padding={2} borderRight='1px solid #ddd'>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Button>Carregar Imagem</Button>
          </div>

          { image && <img className={styles.image} src={image} alt='background' /> }

          <TextField id='title' placeholder='Título do Post' fullWidth />

          <Autocomplete
            multiple
            id="tags-outlined"
            options={allTags}
            getOptionLabel={(option) => option.title}
            defaultValue={[allTags[3]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="tags"
              />
            )}
          />

          <textarea className={styles.textArea} placeholder='Escreva o conteúdo do Post...'></textarea>
        </Box>

        <Box width='50%' height='100%' padding={2}>
          { image && <img className={styles.imagePreview} src={image} alt='background' /> }
        </Box>
      </Box>

      <AppBar position='fixed' color='inherit' className={styles.appBar}>
        <Toolbar>
          <Button className={styles.button}>
            Salvar Rascunho
          </Button>

          <Button color='secondary' variant='outlined' className={styles.button}>
            Publicar
          </Button>
        </Toolbar>
      </AppBar>
    </>
);
}

export default New;
