import React, {useState} from 'react'
import { connect } from 'react-redux'
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

function NewPost({user}) {
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const [status, setStatus] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [github, setGithub] = useState("")
    const classes = useStyles();
    const lastLocation = useLastLocation();

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    }

    const handleImageChange = (e) => {
        setImage(e.target.value)
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const handleGithubChange = (e) => {
        setGithub(e.target.value)
    }

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({post: {title: title, content: content, category: category, user: author, status: true, }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        setTitle("")
        setContent("")
        setImage("")
        setStatus("")
        setGithub("")
        setDifficulty("")
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
                New Post
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <CssTextField
                        variant="outlined"
                        required
                        autoFocus
                        fullWidth
                        name="title"
                        label="Post Title"
                        id="title"
                        value={title} 
                        onChange={handleTitleChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <CssTextField
                        multiline
                        rowsMax={6}
                        name="content"
                        variant="outlined"
                        required
                        fullWidth
                        id="content"
                        label="Post Body"
                        value={content} 
                        onChange={handleContentChange}                        
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
                        label="Category"
                        value={lastLocation.pathname.slice(1)}
                        onChange={handleCategoryChange}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        id="author"
                        label="Author"
                        name="author"
                        value={user.username} 
                        onChange={handleAuthorChange}                        
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        id="image"
                        label="Image Url"
                        name="image"
                        value={image} 
                        onChange={handleImageChange}                        
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        id="github"
                        label="GitHub Repo Url"
                        name="github"
                        value={github} 
                        onChange={handleGithubChange}                        
                    />
                    </Grid>             
                    <Grid item xs={12}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        id="difficulty"
                        label="Difficulty"
                        name="difficulty"
                        value={difficulty} 
                        onChange={handleDifficultyChange}                        
                    />
                    </Grid>      
                    <Grid item xs={12}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        id="status"
                        label="Status"
                        name="status"
                        value={"Open"} 
                        onChange={handleStatusChange}                        
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
                    Add Post
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

export default connect(mapStateToProps)(NewPost);