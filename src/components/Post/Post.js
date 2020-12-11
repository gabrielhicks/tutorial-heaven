import React, {useState, useRef} from 'react'
import {connect} from 'react-redux'
import Comment from '../Comment/Comment'
import {Link} from 'react-router-dom'
import EditPost from './EditPost'
import ChatIcon from '@material-ui/icons/Chat';
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {CommentContainer, NewCommentStyle, SideBar} from '../Comment/style'
import {PostCard, PostTitle, PostContent, PostImage, PostInfo, ProjectStatus, PostCardAuthor, PostCardDate, PostCardRepo, MaskDiv} from './style'
import { motion } from "framer-motion";
import { Button } from '@material-ui/core';
import NewComment from '../Comment/NewComment'
import Sidebar from '../Sidebar/Sidebar'


function Post({post, root, user}) {
    function renderComments(){
        return post.comments.map(comment => <Comment comment={comment}></Comment>)
    }
    const pageTopRef = useRef(null)
    const [editClicked, setEditClick] = useState(false)
    const [newClicked, setNewClick] = useState(false)

    const scrollToTop = () => {
        pageTopRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const editClickHandler = () => {
        setEditClick(!editClicked)
    }

    const newClickHandler = () => {
        setNewClick(!newClicked)
    }

    const fixDate = date => {
        let date_test = new Date(date);
        let first = `${date_test}`.slice(4,15)
        let last = `${date_test}`.slice(16,25)
        return `${first} at ${last} EST`
    }

    return (
        <>
        {post.comments ?
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        ref={pageTopRef}
        >
        <Sidebar root={root}/>
            <CommentContainer
            container
            direction="column"
            alignItems="center"
            >
            {newClicked === true ? <><MaskDiv onClick={newClickHandler} />{scrollToTop()}<NewComment style={{zIndex: 999}} post={post} /></> : null}
            {editClicked === true ? <><MaskDiv onClick={editClickHandler} />{scrollToTop()}<EditPost style={{zIndex: 999}} post={post} /></> : null}
            <PostCard>
                <PostImage src={post.image_url}/>
                
                <PostInfo>
                    {post.user.id === user.id ?
                    <>
                    <><Button onClick={editClickHandler}>Edit Post</Button><b>&nbsp;|&nbsp;</b></>
                    </>
                    :
                    null
                    }
                    {post.status === true ?
                    <ProjectStatus><b>{post.difficulty}</b>&nbsp;|&nbsp;<i className="active">Open</i></ProjectStatus>
                    :
                    <ProjectStatus><b>{post.difficulty}</b>&nbsp;|&nbsp;<i className="status">Closed</i></ProjectStatus>
                    }
                    <PostCardAuthor>posted by <Link style={{color: "black"}} to={`/profile/${post.user.id}`}>{post.user.username}</Link></PostCardAuthor>
                    <PostCardRepo>Project Repo: <a style={{width: "100px", color: "black"}} rel="noreferrer" target="_blank" href={`${post.github}`}>GitHub</a></PostCardRepo>
                    <PostCardDate>{fixDate(post.created_at)}</PostCardDate>
                </PostInfo>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.content}</PostContent>
            </PostCard>
            {post.comments.length === undefined ? (<h5>Waking up the dyno...</h5>) : <>{renderComments()}<br /></>}
            {user.id ? <><SideBar container item xs={4}><NewCommentStyle onClick={newClickHandler}><AddCircleIcon/>New</NewCommentStyle><NewCommentStyle component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewCommentStyle></SideBar></> : null }
            </CommentContainer>
        </motion.div>
        :
        <>
        <h5>Waking up the dyno...</h5>
        </>
        }
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Post);