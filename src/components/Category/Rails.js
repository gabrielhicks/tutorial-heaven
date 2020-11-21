import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {MotionImage, IconGrid, Icon, PostContainer, PostCard, GridItem, Title, IconLink} from './style'
import PostChart from '../Charts/PostChart'
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

function Rails({imageSize, fetchPosts, posts}) {

    useEffect(() => {
        fetchPosts()
    }, [])

    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    function filteredPosts() {
        return posts.filter(post => 
            post.category.topic === "Ruby on Rails")
            .map(post => 
            <GridItem item xs={10}>
                <PostCard className={classes.paper}>
                    <h3>{post.title}</h3>
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
        <motion.div
        initial='initial'
        animate='animate'
        exit='exit'>
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
                    <IconLink to="/reactjs"><Icon className="extra"><motion.img transition={transition} initial={{opacity: 1}} animate={{opacity: 0.1}} alt="ReactJS" src="https://png2.cleanpng.com/sh/a9ae3b5b8626a46af7be3724fa57d4b1/L0KzQYm3VMA2N6Z7j5H0aYP2gLBuTfdidZYyitdqY4SwfrL7igZmNZtmjtN8Y4LsgMW0gf5lepDufJ95aIn2ebT6TcVia2dpTdgAMUi6SbaBTsY3OmQ5Tqc6MUW1QoqBUMM1OWI1SKU3cH7q/kisspng-game-react-native-javascript-android-physics-5ac6d5f51879e8.6623465115229803411003.png" /></Icon></IconLink>
                    <Icon>
                    <MotionImage
                        className="railslogo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png"
                        alt='Ruby on Rails'
                        width={imageSize.width}
                        height={imageSize.height}
                        initial={{ scale: 1.1 }}
                        animate={{
                            transition: { delay: 0.6, ...transition },
                            scale: 2.4
                            // y: window.innerWidth > 1440 ? 500 : 700,
                        }}
                        />
                    </Icon>
                    <IconLink to="/javascript"><Icon className="extra"><motion.img transition={transition} initial={{ opacity: 1 }} animate={{opacity: 0.1}} alt="JavaScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"/></Icon></IconLink>
                    <IconLink to="/angular"><Icon className="extra"><motion.img transition={transition} initial={{ opacity: 1 }} animate={{opacity: 0.1}} alt="AngularJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png" /></Icon></IconLink>
                    <IconLink to="/vue"><Icon className="extra"><motion.img transition={transition} initial={{ opacity: 1 }} animate={{opacity: 0.1}} alt="VueJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/200px-Vue.js_Logo_2.svg.png" /></Icon></IconLink>
                    <IconLink to="/html5"><Icon className="extra"><motion.img transition={transition} initial={{ opacity: 1 }} animate={{opacity: 0.1}} alt="HTML5" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/full/html5.png" /></Icon></IconLink>
                    </IconGrid>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: { delay: 1.0, ...transition }}}
            exit="exit"
            >
                <Title>Ruby on Rails</Title>
                <PostContainer
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
                className={classes.root}>
                    {posts.length === undefined ? (<h1>loading</h1>) : filteredPosts()}
                </PostContainer>
            </motion.div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rails)