import React, {useEffect} from 'react'
import { Route, Switch, Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import ChatIcon from '@material-ui/icons/Chat';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {
    PostContainer, 
    PostCard, 
    GridItem, 
    Title, 
    SideBar, 
    PostLink, 
    NewPost, 
    PostCardGrid, 
    PostCardImage, 
    PostCardTitle, 
    PostCardAuthor, 
    PostCardComments, 
    PostCardStatus,
    PostCardDate} from './style'
import Post from '../Post/Post'
import {fetchCategory } from '../../redux/Category/category.action'
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

const fixDate = date => {
    let date_test = new Date(date);
    let first = `${date_test}`.slice(4,15)
    let last = `${date_test}`.slice(16,25)
    return `${first} at ${last} EST`
}

function Category({fetchCategory, catId, root, user, category}) {
    useEffect(() => {
        fetchCategory(catId)
    }, [catId])

    const classes = useStyles();
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

    function filteredPosts() {
        return category.posts.map(post => 
            <GridItem style={{zIndex: 100}} key={post.id} item xs={10}>
                <PostCard style={{backgroundColor: "white"}} className={classes.paper}>
                <PostCardGrid>
                    <a style={{width: "100px"}} target="_blank" href={`${post.github}`}><PostCardImage style={{width: "100px"}} src={post.image_url}></PostCardImage></a>
                    <PostCardTitle><PostLink style={{zIndex: 100}} to={`/${root}/${post.id}`}><h3>{post.title}</h3></PostLink></PostCardTitle>
                    <PostCardAuthor>Posted by&nbsp;<Link style={{color: "black"}} to={`/profile/${post.user.id}`}><i>{post.user.username}</i></Link></PostCardAuthor>
                    <PostCardDate>{fixDate(post.created_at)}</PostCardDate>
                    <PostCardComments><Link style={{color: "black"}} to={`/${root}/${post.id}`}>{post.comments.length} comments</Link></PostCardComments>
                    {post.status === true
                    ? 
                    <PostCardStatus>{post.difficulty}&nbsp;|&nbsp;<i className="status active">Open</i></PostCardStatus>
                    :
                    <PostCardStatus>{post.difficulty}&nbsp;|&nbsp;<i className="status">Closed</i></PostCardStatus>
                    }
                </PostCardGrid>
                </PostCard>
            </GridItem>)
    }

    const renderIcons = (category) => {
        switch(category) {
            case "reactjs":
                return <ReactIcons />
            case "rails":
                return <RailsIcons />
            case "javascript":
                return <JavascriptIcons />
            case "angular":
                return <AngularIcons />
            case "vue":
                return <VueIcons />
            case "html5":
                return <HtmlIcons />
        }

    }
    

    return (
        <>
        {category ?
        <>
        <Switch>
        <Route path={`/${root}/chat`} render={() => <CategoryChat topic={category.id} />}/>
        <Route path={`/${root}/:id`} render={(routerProps) => {
            let id = parseInt(routerProps.match.params.id)
            let post;
            if(category.posts) {
                post = category.posts.find(post => post.id === id)
            }
            return (
                <>
                {
                    category.posts
                    ? 
                    <Post key={post.id} post={post} root={`${root}`}/>
                    :
                    <h2>Loading...</h2>
                }
                </>
            )
        }}/>
        <Route path={`/${root}`} render={() => {
            return (
                <>
                <motion.div
                animate={{zIndex: 0}}
                exit={{opacity: 1, transition: transition, scale: 1}}
                >
                {renderIcons(root)}
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0.02}}
                    animate={{opacity: 1, transition: { delay: 0.2, ...transition }}}
                    exit={{opacity: 0.02, transition: transition, scale: 1}}
                    >
                        <Title>{category.topic}</Title>
                        <PostContainer
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                        className={classes.root}>
                            {user.id ? <><SideBar container item xs={4}><NewPost component={Link} to="/newpost"><AddCircleIcon/>New</NewPost><NewPost component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewPost></SideBar></> : null }
                            {category.posts === undefined ? (<h1>loading</h1>) : <>{filteredPosts()}<br /></>}
                        </PostContainer>
                    </motion.div>
                    </>
            )
        }}/>
        </Switch>
        </>
        :
        <h3>Loading</h3>
        }
        </>
    )
}

const mapStateToProps = state => {
    return {
        category: state.category,
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: (id) => dispatch(fetchCategory(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)