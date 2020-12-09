import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createUser} from '../../redux/User/user.action'
import { motion } from "framer-motion";
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
        color: "black",
        backgroundColor: "rgb(199, 237, 230)",
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "rgb(199, 237, 230)",
    },
}));

function Register(props) {
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const classes = useStyles();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleBioChange = (e) => {
        setBio(e.target.value)
    }

    const localHandleSubmit = (e) => {
        e.preventDefault()
        let images = [
            "https://i.ibb.co/T4q1LdD/cloud1.webp", 
            "https://i.ibb.co/xJbwB2R/cloud2.webp", 
            "https://i.ibb.co/VTsRD9n/cloud3.webp",
            "https://i.ibb.co/mhSK8rM/cloud4.webp",
            "https://i.ibb.co/QKM5kZ9/cloud5.webp"
        ]
        props.handleSubmit({
            username: username, 
            password: password, 
            first_name: firstName, 
            last_name: lastName, 
            email: email, 
            bio: bio,
            image: images[Math.floor(Math.random() * images.length)]
        })
        setUsername("")
        setPassword("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setBio("")
    }

    
    return(
        <motion.div
            initial={{transition: transition, opacity: 0.1}}
            animate={{opacity: 1}}
            exit={{opacity: 0.1, transition: transition, scale: 1}}
        >
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form onSubmit={localHandleSubmit} className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <CssTextField
                        autoComplete="username"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoFocus
                        value={username} 
                        onChange={handleUsernameChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password} 
                        onChange={handlePasswordChange}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <CssTextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={firstName} 
                        onChange={handleFirstNameChange}                        
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        value={lastName} 
                        onChange={handleLastNameChange}                        
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email} 
                        onChange={handleEmailChange}                        
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <CssTextField
                        multiline
                        rowsMax={6}
                        variant="outlined"
                        required
                        fullWidth
                        id="bio"
                        label="Bio"
                        name="bio"
                        value={bio} 
                        onChange={handleBioChange}                        
                    />
                    </Grid>                    
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="inherit"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link style={{color: "black"}} href="/login" variant="body2">
                        Don't want to register? Try username 'demo' with password 'demo' and click here to Log In
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
        </motion.div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {handleSubmit: (user) => dispatch(createUser(user))}
}

export default connect(null, mapDispatchToProps)(Register)