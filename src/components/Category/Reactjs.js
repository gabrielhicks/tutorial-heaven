import React, {useEffect} from 'react'
import { Route, Switch, withRouter } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import {MotionImage, IconGrid, Icon, PostContainer, PostCard, GridItem, Title, IconLink, PostLink, NewPost} from './style'
import Button from '@material-ui/core/Button';
import Post from '../Post/Post'
import {fetchPosts} from '../../redux/Post/post.action'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
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

function Reactjs({posts, fetchPosts, imageSize, root, topic, user}) {
    useEffect(() => {
        fetchPosts()
    }, [])

    const classes = useStyles();
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    function filteredPosts() {
        return posts.filter(post => 
            post.category.topic === topic)
            .map(post => 
            <GridItem key={post.id} item xs={10}>
                <PostCard className={classes.paper}>
                    <PostLink to={`/${root}/${post.id}`}><h3>{post.title}</h3></PostLink>
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
                    <Post key={post.id} post={post} lang={`${root}`}/>
                    :
                    <h2>Loading...</h2>
                }
                </>
            )
        }}/>
        <Route path={`/${root}`} render={() => {
            return (
                <>
                {/* <motion.div
                initial='initial'
                animate='animate'
                exit='exit'> */}
                        <motion.div
                        initial={{
                            y: 0,
                        }}
                        animate={{
                            y: "-150%",
                            x: "0",
                            width: "100vw",
                            // height: window.innerWidth > 1440 ? 200 : 0,
                            transition: { delay: 1.0, ...transition },
                        }}
                        >
                        <div>
                            <IconGrid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="baseline">
                            <Icon>
                            <MotionImage
                                src="https://i.ibb.co/HqZ0RMF/ezgif-5-5320ccde36a0.webp"
                                alt='Reactjs'
                                width={imageSize.width}
                                height={imageSize.height}
                                initial={{ scale: 1.1 }}
                                animate={{
                                    transition: { delay: 0.6, ...transition },
                                    scale: 2.5,
                                    // y: window.innerWidth > 1440 ? 500 : 700,
                                }}
                                />
                            </Icon>
                            <IconLink to="/rails"><Icon className="extra"><motion.img transition={transition} initial={{opacity: 1}} animate={{opacity: 0.1}} alt="Ruby on Rails" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png" /></Icon></IconLink>
                            <IconLink to="/javascript"><Icon className="extra"><motion.img transition={transition} initial={{opacity: 1}} animate={{opacity: 0.1}} alt="JavaScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"/></Icon></IconLink>
                            <IconLink to="/angular"><Icon className="extra"><motion.img transition={transition} initial={{opacity: 1}} animate={{opacity: 0.1}} alt="AngularJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png" /></Icon></IconLink>
                            <IconLink to="/vue"><Icon className="extra"><motion.img transition={transition} initial={{opacity: 1}} animate={{opacity: 0.1}} alt="VueJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/200px-Vue.js_Logo_2.svg.png" /></Icon></IconLink>
                            <IconLink to="/html5"><Icon className="extra"><motion.img transition={transition} initial={{opacity: 1}} animate={{opacity: 0.1}} alt="HTML5" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/full/html5.png" /></Icon></IconLink>
                            </IconGrid>
                            </div>
                        </motion.div>
                    {/* </motion.div> */}
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: { delay: 1.0, ...transition }}}
                    exit="exit"
                    >
                        <Title>React</Title>
                        <PostContainer
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                        className={classes.root}>
                            {posts.length === undefined ? (<h1>loading</h1>) : <>{filteredPosts()}<br />{user.id ? <Button><NewPost to="/newpost">Add Post</NewPost></Button> : null }</>}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reactjs))