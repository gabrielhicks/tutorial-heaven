import React, {useState} from 'react'
import { connect } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { useLastLocation } from 'react-router-last-location';
import { motion } from "framer-motion";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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

function NewComment({user}) {
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState(user)
    const [category, setCategory] = useState("")
    const history = useHistory();
    const classes = useStyles();
    const lastLocation = useLastLocation();

    const handleBodyChange = (e) => {
        setBody(e.target.value)
        let category2 = `${lastLocation.pathname.slice(1)}`
        let words = category2.split("/")
    
        console.log(words[1])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let category2 = `${lastLocation.pathname.slice(1)}`
        let words = category2.split("/")
        let cat = words[0]
        let postId = words[1]
        fetch(`http://localhost:3000/api/v1/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({comment: {body: body, user: author, category: cat, post_id: postId}
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            return history.push(`${lastLocation.pathname.slice(1)}`)
        })
        setBody("")
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
                <img width="40px" src="https://i.ibb.co/HxCXyfm/plus.webp" />
                </Avatar>
                <Typography component="h1" variant="h5">
                New Comment
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <CssTextField
                        multiline
                        rowsMax={6}
                        name="body"
                        variant="outlined"
                        required
                        fullWidth
                        id="body"
                        label="Post Body"
                        value={body} 
                        onChange={handleBodyChange}                        
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <CssTextField
                        autoComplete="category"
                        name="category"
                        variant="outlined"
                        required
                        fullWidth
                        id="category"
                        label="Post"
                        value={lastLocation.pathname.slice(1)}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <CssTextField
                        autoComplete="author"
                        name="author"
                        variant="outlined"
                        required
                        fullWidth
                        id="author"
                        label="Author"
                        value={user.username}
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
                    Add Comment
                </Button>
                </form>
            </div>
            </Container>
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(NewComment);