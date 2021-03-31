import React, { useState } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MyForm } from './style';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    color: 'black',
    backgroundColor: 'rgb(199, 237, 230)',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'rgb(199, 237, 230)',
  },
}));

function EditPost({ user, post }) {
  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  // const [category, setCategory] = useState(post.id)
  // const [author, setAuthor] = useState(user.username)
  const [image, setImage] = useState(post.image_url);
  const [status, setStatus] = useState(post.status);
  const [difficulty, setDifficulty] = useState(post.difficulty);
  const [github, setGithub] = useState(post.github);
  const classes = useStyles();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCategoryChange = (e) => {
    //     setCategory(e.target.value)
  };

  const handleAuthorChange = (e) => {
    // setAuthor(e.target.value)
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleGithubChange = (e) => {
    setGithub(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://tutorialheavenapi.herokuapp.com/api/v1/posts/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        post: {
          title: title,
          content: content,
          category_id: post.category_id,
          user_id: user.id,
          status: status,
          github: github,
          image_url: image,
          difficulty: difficulty,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data)
      });
    setTitle('');
    setContent('');
    setImage('');
    setStatus('');
    setGithub('');
    setDifficulty('');
  };
  return (
    <>
      {post ? (
        <MyForm
          initial={{ transition: transition, opacity: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.1, transition: transition, scale: 1 }}>
          <Container
            style={{ backgroundColor: 'white' }}
            component='main'
            maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar style={{ zIndex: '100' }} className={classes.avatar}>
                <img
                  alt='Plus sign Icon'
                  width='40px'
                  src='https://i.ibb.co/HxCXyfm/plus.webp'
                />
              </Avatar>
              <Typography style={{ zIndex: '100' }} component='h1' variant='h5'>
                Edit Post
              </Typography>
              <form
                style={{ zIndex: '1000' }}
                onSubmit={handleSubmit}
                className={classes.form}
                noValidate>
                <Grid style={{ zIndex: '100' }} container spacing={2}>
                  <Grid style={{ zIndex: '100' }} item xs={12}>
                    <CssTextField
                      style={{ zIndex: '100' }}
                      variant='outlined'
                      required
                      autoFocus
                      fullWidth
                      name='title'
                      label='Post Title'
                      id='title'
                      value={title}
                      onChange={handleTitleChange}
                    />
                  </Grid>
                  <Grid style={{ zIndex: '100' }} item xs={12}>
                    <CssTextField
                      style={{ zIndex: '100' }}
                      multiline
                      rowsMax={6}
                      name='content'
                      variant='outlined'
                      required
                      fullWidth
                      id='content'
                      label='Post Body'
                      value={content}
                      onChange={handleContentChange}
                    />
                  </Grid>
                  <Grid style={{ zIndex: '100' }} item xs={12} sm={6}>
                    <CssTextField
                      style={{ zIndex: '100' }}
                      autoComplete='category'
                      name='category'
                      variant='outlined'
                      required
                      fullWidth
                      id='category'
                      label='Post Id'
                      value={post.id}
                      onChange={handleCategoryChange}
                    />
                  </Grid>
                  <Grid style={{ zIndex: '100' }} item xs={12} sm={6}>
                    <CssTextField
                      style={{ zIndex: '100' }}
                      variant='outlined'
                      required
                      fullWidth
                      id='author'
                      label='Author'
                      name='author'
                      value={user.username}
                      onChange={handleAuthorChange}
                    />
                  </Grid>
                  <Grid style={{ zIndex: '100' }} item xs={12}>
                    <CssTextField
                      style={{ zIndex: '100' }}
                      variant='outlined'
                      required
                      fullWidth
                      id='image'
                      label='Image Url'
                      name='image'
                      value={image}
                      onChange={handleImageChange}
                    />
                  </Grid>
                  <Grid style={{ zIndex: '100' }} item xs={12}>
                    <CssTextField
                      variant='outlined'
                      required
                      fullWidth
                      id='github'
                      label='GitHub Repo Url'
                      name='github'
                      value={github}
                      onChange={handleGithubChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CssTextField
                      variant='outlined'
                      required
                      fullWidth
                      id='difficulty'
                      label='Difficulty'
                      name='difficulty'
                      value={difficulty}
                      onChange={handleDifficultyChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CssTextField
                      variant='outlined'
                      required
                      fullWidth
                      id='status'
                      label='Status'
                      name='status'
                      value={status}
                      onChange={handleStatusChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='inherit'
                  className={classes.submit}>
                  Submit Edit
                </Button>
              </form>
            </div>
          </Container>
        </MyForm>
      ) : (
        <h3>Please only edit your posts from their page</h3>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(EditPost);
