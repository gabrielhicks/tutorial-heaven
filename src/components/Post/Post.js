import React from 'react'
import {connect} from 'react-redux'
import Comment from '../Comment/Comment'
import {Link} from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {CommentContainer, NewComment, SideBar} from '../Comment/style'
import {PostCard, PostTitle, PostContent, PostImage, PostInfo, ProjectStatus} from './style'
import { motion } from "framer-motion";


function Post({post, root, user}) {
    function renderComments(){
        return post.comments.map(comment => <Comment comment={comment}></Comment>)
    }

    return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        >
            <CommentContainer
            container
            direction="column"
            // justify="center"
            alignItems="center"
            >
            <PostCard>
                <PostImage src="https://lorempixel.com/300/300"/>
                <PostInfo>
                    {/* Status:&nbsp; */}
                    {post.status === "active" ?
                    <ProjectStatus><i className="active">{post.status}</i></ProjectStatus>
                    :
                    <ProjectStatus><i className="status">{post.status}</i></ProjectStatus>
                    }
                    <br></br>
                    posted by {post.user.username}
                    <br></br>
                    Repo
                </PostInfo>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.content}</PostContent>
            </PostCard>
            {console.log(post)}
            {post.comments.length === undefined ? (<h1>loading</h1>) : <>{renderComments()}<br /></>}
            {user.id ? <><SideBar container item xs={4}><NewComment component={Link} to="/newcomment"><AddCircleIcon/>New</NewComment><NewComment component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewComment></SideBar></> : null }
            </CommentContainer>
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Post);