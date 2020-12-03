import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { motion } from "framer-motion";
import {createPost} from '../../redux/Post/post.action'

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

function NewPost({user, categoryObj, createPost}) {
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const [status, setStatus] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [github, setGithub] = useState("")
    const classes = useStyles();

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
        createPost(
            {
                title: title, 
                content: content, 
                category_id: categoryObj.id, 
                user_id: user.id, 
                status: true, 
                github: github,
                image_url: image,
                difficulty: difficulty
            }
        )
        setTitle("")
        setContent("")
        setImage("")
        setStatus("")
        setGithub("")
        setDifficulty("")
        history.push("/profile")
    }
    
    return(
        <motion.div
            initial={{transition: transition, opacity: 0.1}}
            animate={{opacity: 1}}
            exit={{opacity: 0.1, transition: transition, scale: 1}}
        >
        <Container style={{backgroundColor: "white"}} component="main" maxWidth="xs">
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
                        value={categoryObj.root_url}
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

const mapDispatchToProps = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);