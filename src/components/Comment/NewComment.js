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
import {MyForm} from './style'

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

function NewComment({user, post}) {
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState(user)
    const [category, setCategory] = useState("")
    const history = useHistory();
    const classes = useStyles();
    const lastLocation = useLastLocation();

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({comment: {body: body, user: author, category: post.category.id, post_id: post.id}
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
        <MyForm
            initial={{transition: transition, opacity: 0.1}}
            animate={{opacity: 1}}
            exit={{opacity: 0.1, transition: transition, scale: 1}}
        >
        <Container style={{backgroundColor: "white"}} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar style={{zIndex: "100"}} className={classes.avatar}>
                <img width="40px" src="https://i.ibb.co/HxCXyfm/plus.webp" />
                </Avatar>
                <Typography style={{zIndex: "100"}} component="h1" variant="h5">
                New Comment
                </Typography>
                <form style={{zIndex: "100"}} onSubmit={handleSubmit} className={classes.form} noValidate>
                <Grid style={{zIndex: "100"}} container spacing={2}>
                    <Grid  style={{zIndex: "100"}}item xs={12}>
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
                    <Grid style={{zIndex: "100"}} item xs={12} sm={6}>
                    <CssTextField
                        name="category"
                        variant="outlined"
                        required
                        fullWidth
                        id="category"
                        label="Post"
                        value={post.id}
                    />
                    </Grid>
                    <Grid style={{zIndex: "100"}} item xs={12} sm={6}>
                    <CssTextField
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
        </MyForm>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(NewComment);