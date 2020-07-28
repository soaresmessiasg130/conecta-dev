import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  TextField,
  Typography,
  Divider,
  Avatar
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import { useDropzone } from 'react-dropzone';
import Markdown from 'react-markdown';

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
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

function New() {
  const account = useSelector(state => state.account);
  const isAuthenticated = !!account.user;
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

  const handleTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleTags = (event, values) => {
    setTags(values);
  };

  const handleMarkdown = (event) => {
    seText(event.currentTarget.value);
  };

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

          <TextField
            id='title'
            placeholder='Título do Post'
            fullWidth
            onChange={handleTitle}/>

          <Autocomplete
            multiple
            id="tags-outlined"
            options={allTags}
            getOptionLabel={(option) => option.title}
            defaultValue={[allTags[3]]}
            filterSelectedOptions
            value={tags}
            onChange={handleTags}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="tags"
              />
            )}
          />

          <textarea
            className={styles.textArea}
            placeholder='Escreva o conteúdo do Post...'
            onChange={handleMarkdown}></textarea>
        </Box>

        <Box width='50%' height='100%' padding={2}>
          <Box display='flex' alignItems='center'>
            <Box className={styles.avatar}>
              <Avatar src={account.user?.avatar} />
            </Box>

            <Box>
              <Typography variant='body1'>{account.user?.name}</Typography>

              <Typography variant='body2'>10 meses atrás</Typography>
            </Box>
          </Box>

          { image && <img className={styles.imagePreview} src={image} alt='background' /> }

          <Typography variant='h2'>{title}</Typography>

          <Typography variant='h5'>{tags.map(item => (`#${item.title} `))}</Typography>

          <Divider />

          <Markdown source={text} />
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
