import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../redux/User/user.action';
import { motion } from 'framer-motion';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

function Login(props) {
  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const localHandleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit({ username: username, password: password });
    setUsername('');
    setPassword('');
    return history.push('/');
  };

  return (
    <motion.div
      initial={{ transition: transition, opacity: 0.1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.1, transition: transition, scale: 1 }}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form
            onSubmit={localHandleSubmit}
            className={classes.form}
            noValidate>
            <CssTextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              autoFocus
              value={username}
              onChange={handleUsernameChange}
            />
            <CssTextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              className={classes.submit}>
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link style={{ color: 'black' }} href='/signup' variant='body2'>
                  {
                    "Don't have an account? Try username 'demo' with password 'demo' or click here to Sign Up"
                  }
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </motion.div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { handleSubmit: (user) => dispatch(loginUser(user)) };
};

export default connect(null, mapDispatchToProps)(Login);
