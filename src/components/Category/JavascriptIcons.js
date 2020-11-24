import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import {MotionImage, IconGrid, Icon, IconLink} from './style'
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

const pageTransition = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0.1
    }
}

function JavascriptIcons({posts, fetchPosts, imageSize, root, topic, user}) {

    const classes = useStyles();
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

    return (
        <>
            {/* <motion.div
            initial='initial'
            animate='animate'
            exit='exit'> */}
                <motion.div
                initial={{
                    y: "-150%",
                    x: "0",
                    width: "100vw",
                    transition: { delay: 0.5, ...transition },
                    opacity: 1
                }}
                animate={{opacity: 1}}
                exit="in"
                >
                <div>
                    <IconGrid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="baseline">
                    <IconLink to="/reactjs"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="React" src="https://i.ibb.co/HqZ0RMF/ezgif-5-5320ccde36a0.webp" /></Icon></IconLink>
                    <IconLink to="/rails"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="Ruby on Rails" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png" /></Icon></IconLink>
                    <Icon>
                    <MotionImage
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
                        alt='JavaScript'
                        width="100px"
                        height="100px"
                        initial={{ scale: 1, opacity: 0.1 }}
                        animate={{
                            transition: { delay: 0.2, ...transition },
                            scale: 2.3,
                            opacity: 1
                        }}
                        exit={{scale: 1, transition: transition, opacity: 0.1}}
                        />
                    </Icon>
                    {/* <IconLink to="/javascript"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="JavaScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"/></Icon></IconLink> */}
                    <IconLink to="/angular"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="AngularJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png" /></Icon></IconLink>
                    <IconLink to="/vue"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="VueJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/200px-Vue.js_Logo_2.svg.png" /></Icon></IconLink>
                    <IconLink to="/html5"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="HTML5" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/full/html5.png" /></Icon></IconLink>
                    </IconGrid>
                    </div>
                </motion.div>
            {/* </motion.div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(JavascriptIcons)