import React, {useEffect} from 'react'
import { Route, Switch, Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import ChatIcon from '@material-ui/icons/Chat';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import {PostContainer, PostCard, GridItem, Title, SideBar, PostLink, NewPost} from './style'
import Post from '../Post/Post'
import {fetchPosts} from '../../redux/Post/post.action'
import { connect } from 'react-redux'
import RailsIcons from './RailsIcons';
import ReactIcons from './ReactIcons';
import JavascriptIcons from './JavascriptIcons';
import AngularIcons from './AngularIcons';
import VueIcons from './VueIcons';
import HtmlIcons from './HtmlIcons';
import CategoryChat from '../Channels/CategoryChat';

const useStyles = makeStyles((theme) => ({
    overrides: {
        backgroundColor: 'transparent',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        width: "50vw",
        textAlign: 'left',
        color: theme.palette.text.primary,
    },
}));

function Category({posts, fetchPosts, root, topic, user}) {
    useEffect(() => {
        fetchPosts()
    }, [])

    const classes = useStyles();
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

    function filteredPosts() {
        return posts.filter(post => 
            post.category.topic === topic)
            .map(post => 
            <GridItem style={{zIndex: 100}} key={post.id} item xs={10}>
                <PostCard style={{backgroundColor: "white"}} className={classes.paper}>
                    <PostLink style={{zIndex: 100}} to={`/${root}/${post.id}`}><h3>{post.title}</h3></PostLink>
                    <p>{post.comments.length} comments
                    {post.status === "active" 
                    ? 
                    <i className="status active">{post.status}</i>
                    :
                    <i className="status">{post.status}</i>}</p>
                </PostCard>
            </GridItem>)
    }
    

    return (
        <>
        <Switch>
        <Route path={`/${root}/chat`} render={() => <CategoryChat topic={topic} />}/>
        <Route path={`/${root}/:id`} render={(routerProps) => {
            let id = parseInt(routerProps.match.params.id)
            let post;
            if(posts.length > 0) {
                post = posts.find(post => post.id === id)
            }
            return (
                <>
                {
                    posts.length > 0 
                    ? 
                    <Post key={post.id} post={post} root={`${root}`}/>
                    :
                    <h2>Loading...</h2>
                }
                </>
            )
        }}/>
        <Route path={`/reactjs`} render={() => {
            return (
                <>
                <motion.div
                animate={{zIndex: 0}}
                exit={{opacity: 1, transition: transition, scale: 1}}
                >
                <ReactIcons />
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0.02}}
                    animate={{opacity: 1, transition: { delay: 0.2, ...transition }}}
                    exit={{opacity: 0.02, transition: transition, scale: 1}}
                    >
                        <Title>{topic}</Title>
                        <PostContainer
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                        className={classes.root}>
                            {user.id ? <><SideBar container item xs={4}><NewPost component={Link} to="/newpost"><AddCircleIcon/>New</NewPost><NewPost component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewPost></SideBar></> : null }
                            {posts.length === undefined ? (<h1>loading</h1>) : <>{filteredPosts()}<br /></>}
                        </PostContainer>
                    </motion.div>
                    </>
            )
        }}/>
        <Route path={`/rails`} render={() => {
            return (
                <>
                <motion.div
                exit={{opacity: 1, transition: transition, scale: 1,}}>
                <RailsIcons />
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0.02}}
                    animate={{opacity: 1, transition: { delay: 0.2, ...transition }}}
                    exit={{opacity: 0.02, transition: transition, scale: 1}}
                    >
                        <Title>{topic}</Title>
                        <PostContainer
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                        className={classes.root}>
                            {user.id ? <><SideBar container item xs={4}><NewPost component={Link} to="/newpost"><AddCircleIcon/>New</NewPost><NewPost component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewPost></SideBar></> : null }
                            {posts.length === undefined ? (<h1>loading</h1>) : <>{filteredPosts()}<br /></>}
                        </PostContainer>
                    </motion.div>
                    </>
            )
        }}/>
        <Route path={`/javascript`} render={() => {
            return (
                <>
                <motion.div
                exit={{opacity: 1, transition: transition, scale: 1,}}>
                <JavascriptIcons />
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0.02}}
                    animate={{opacity: 1, transition: { delay: 0.2, ...transition }}}
                    exit={{opacity: 0.02, transition: transition, scale: 1}}
                    >
                        <Title>{topic}</Title>
                        <PostContainer
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                        className={classes.root}>
                            {user.id ? <><SideBar container item xs={4}><NewPost component={Link} to="/newpost"><AddCircleIcon/>New</NewPost><NewPost component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewPost></SideBar></> : null }
                            {posts.length === undefined ? (<h1>loading</h1>) : <>{filteredPosts()}<br /></>}
                        </PostContainer>
                    </motion.div>
                    </>
            )
        }}/>
        <Route path={`/angular`} render={() => {
            return (
                <>
                <motion.div
                exit={{opacity: 1, transition: transition, scale: 1,}}>
                <AngularIcons />
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0.02}}
                    animate={{opacity: 1, transition: { delay: 0.2, ...transition }}}
                    exit={{opacity: 0.02, transition: transition, scale: 1}}
                    >
                        <Title>{topic}</Title>
                        <PostContainer
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                        className={classes.root}>
                            {posts.length === undefined ? (<h1>loading</h1>) : <>{filteredPosts()}<br /></>}
                            {user.id ? <><SideBar container item xs={4}><NewPost component={Link} to="/newpost"><AddCircleIcon/>New</NewPost><NewPost component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewPost></SideBar></> : null }
                        </PostContainer>
                    </motion.div>
                    </>
            )
        }}/>
        <Route path={`/vue`} render={() => {
            return (
                <>
                <motion.div
                exit={{opacity: 1, transition: transition, scale: 1,}}>
                <VueIcons />
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0.02}}
                    animate={{opacity: 1, transition: { delay: 0.2, ...transition }}}
                    exit={{opacity: 0.02, transition: transition, scale: 1}}
                    >
                        <Title>{topic}</Title>
                        <PostContainer
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                        className={classes.root}>
                            {posts.length === undefined ? (<h1>loading</h1>) : <>{filteredPosts()}<br /></>}
                            {user.id ? <><SideBar container item xs={4}><NewPost component={Link} to="/newpost"><AddCircleIcon/>New</NewPost><NewPost component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewPost></SideBar></> : null }
                        </PostContainer>
                    </motion.div>
                    </>
            )
        }}/>
        <Route path={`/html5`} render={() => {
            return (
                <>
                <motion.div
                exit={{opacity: 1, transition: transition, scale: 1,}}>
                <HtmlIcons />
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0.02}}
                    animate={{opacity: 1, transition: { delay: 0.2, ...transition }}}
                    exit={{opacity: 0.02, transition: transition, scale: 1}}
                    >
                        <Title>{topic}</Title>
                        <PostContainer
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                        className={classes.root}>
                            {posts.length === undefined ? (<h1>loading</h1>) : <>{filteredPosts()}<br /></>}
                            {user.id ? <><SideBar container item xs={4}><NewPost component={Link} to="/newpost"><AddCircleIcon/>New</NewPost><NewPost component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewPost></SideBar></> : null }
                        </PostContainer>
                    </motion.div>
                    </>
            )
        }}/>
            </Switch>
        </>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)