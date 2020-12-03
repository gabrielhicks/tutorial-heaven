import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom"
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import {fetchUsers, setExistingUser, setUserRequest} from '../../redux/User/user.action'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {PostCard, PostTitle, PostContent, PostImage, PostInfo, ProjectStatus, PostCardDate, PostCardRepo} from './style'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: "center",
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

function Profile({user, users, fetchUsers, setExistingUser}) {
    useEffect(() => {
        if(user) {
        const oldToken = localStorage.getItem("token");
        setExistingUser(oldToken)
        fetchUsers()
        }
    }, [])

    const classes = useStyles();

    return (
        <Switch>
        <Route path={`/profile/:id`} render={(routerProps) => {
            let id = parseInt(routerProps.match.params.id)
            let user;
            if(users.length > 0) {
                user = users.find(user => user.id === id)
            }
            return (
                <>
        {users.length > 0
        ? 
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
            >
        {user.posts.length !== undefined ?
        <Container style={{backgroundColor: "white"}} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <img width="40px" src={user.image} />
                </Avatar>
                <Typography component="h1" variant="h5">
                <img width="250px" src={user.profile} />
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    {user.username}
                    </Grid>
                    <Grid item xs={12}>
                    {user.bio}
                    </Grid>
                    <Grid item xs={12}>
                    Posts: {user.posts.length}
                    </Grid>
                    <Grid item xs={12}>
                    {user.posts.length > 0 ?
                        <>{user.posts.map(post => 
                        <>
                        <PostCard component={Link} to={`/${post.category.root_url}/${post.id}`}>
                            <PostImage src={post.image_url}/>
                            <PostTitle>{post.title.slice(0, 10)}...
                            <PostContent>{post.content.slice(0, 10)}...</PostContent></PostTitle>
                        </PostCard>
                        <br></br>
                        </>
                    )}</>
                    :
                    <p>"This user hasn't made any posts yet!"</p>
                    }
                    </Grid>
                    <Grid item xs={12}>
                    Comments: {user.comments.length}
                    </Grid>
                    <Grid item xs={12}>
                    {user.comments.length > 0 ?
                        <>{user.comments.map(comment => 
                        <>
                        <PostCard>
                            <PostTitle>{comment.id}...
                            <PostContent>{comment.body.slice(0, 10)}...</PostContent></PostTitle>
                        </PostCard>
                        <br></br>
                        </>
                    )}</>
                    :
                    <p>"This user hasn't made any comments yet!"</p>
                    }
                    </Grid>             
                    <Grid item xs={12}>
                    </Grid>      
                    <Grid item xs={12}>
                    </Grid>      
                </Grid>
            </div>
            </Container>
                        :
                        <h3>This user can not be found</h3>
                        }
                    </motion.div>
                    :
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        >
                    <h2>Loading...</h2>
                    </motion.div>
                }
                </>
            )
        }}/>
        <Route path="/profile" render={() => {
            return (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        >
        {user.comments ?
        <Container style={{backgroundColor: "white"}} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <img width="40px" src={user.image} />
                </Avatar>
                <Typography component="h1" variant="h5">
                <img width="250px" src={user.profile} />
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    {user.username}
                    </Grid>
                    <Grid item xs={12}>
                    {user.bio}
                    </Grid>
                    <Grid item xs={12}>
                    Posts: {user.posts.length}
                    </Grid>
                    <Grid style={{justifyContent: "center", alignItems: "center"}} item xs={12}>
                    {user.posts.length > 0 ?
                        <>{user.posts.map(post => 
                        <>
                        {console.log(user)}
                        <PostCard component={Link} to={`/${post.category.root_url}/${post.id}`}>
                            <PostImage src={post.image_url}/>
                            <PostTitle>{post.title.slice(0, 10)}...
                            <PostContent>{post.content.slice(0, 10)}...</PostContent></PostTitle>
                        </PostCard>
                        <br></br>
                        </>
                    )}</>
                    :
                    <p>This user hasn't made any posts yet!</p>
                    }
                    </Grid>
                    <Grid item xs={12}>
                    Comments: {user.comments.length}
                    </Grid>
                    <Grid item xs={12}>
                    {user.comments.length > 0 ?
                        <>{user.comments.map(comment => 
                        <>
                        <PostCard>
                            <PostTitle>{comment.id}...
                            <PostContent>{comment.body.slice(0, 10)}...</PostContent></PostTitle>
                        </PostCard>
                        <br></br>
                        </>
                    )}</>
                    :
                    <p>"This user hasn't made any comments yet!"</p>
                    }
                    </Grid>             
                    <Grid item xs={12}>
                    </Grid>      
                    <Grid item xs={12}>
                    </Grid>      
                </Grid>
            </div>
            </Container>
            :
            <h2>Loading</h2>
        }
        </motion.div>
            )}} />
        </Switch>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setExistingUser: (token) => dispatch(setExistingUser(token)),
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));