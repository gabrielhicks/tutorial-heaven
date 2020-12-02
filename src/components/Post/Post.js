import React, {useState} from 'react'
import {connect} from 'react-redux'
import Comment from '../Comment/Comment'
import {Link} from 'react-router-dom'
import EditPost from './EditPost'
import ChatIcon from '@material-ui/icons/Chat';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {CommentContainer, NewComment, SideBar} from '../Comment/style'
import {PostCard, PostTitle, PostContent, PostImage, PostInfo, ProjectStatus, PostCardAuthor, PostCardDate, PostCardRepo, MaskDiv} from './style'
import { motion } from "framer-motion";
import { Button } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar'


function Post({post, root, user}) {
    function renderComments(){
        return post.comments.map(comment => <Comment comment={comment}></Comment>)
    }

    const [clicked, setClick] = useState(false)

    const clickHandler = () => {
        setClick(!clicked)
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
        >
        <Sidebar root={root}/>
            <CommentContainer
            container
            direction="column"
            alignItems="center"
            >
            {clicked === true ? <><MaskDiv onClick={clickHandler} /><EditPost style={{zIndex: 999}} post={post} /></> : null}
            <PostCard>
                <PostImage src={post.image_url}/>
                <PostInfo>
                    {post.user.id === user.id ?
                    <>
                    <><Button onClick={clickHandler}>Edit Post{console.log(clicked)}</Button><b>&nbsp;|&nbsp;</b></>
                    </>
                    :
                    null
                    }
                    {post.status === true ?
                    <ProjectStatus>{post.difficulty}&nbsp;|&nbsp;<i className="active">Open</i></ProjectStatus>
                    :
                    <ProjectStatus>{post.difficulty}&nbsp;|&nbsp;<i className="status">Closed</i></ProjectStatus>
                    }
                    <PostCardAuthor>posted by <Link style={{color: "black"}} to={`/profile/${post.user.id}`}>{post.user.username}</Link></PostCardAuthor>
                    <PostCardRepo>Project Repo: <a style={{width: "100px", color: "black"}} target="_blank" href={`${post.github}`}>GitHub</a></PostCardRepo>
                    <PostCardDate>{fixDate(post.created_at)}</PostCardDate>
                </PostInfo>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.content}</PostContent>
            </PostCard>
            {console.log(post)}
            {post.comments.length === undefined ? (<h1>loading</h1>) : <>{renderComments()}<br /></>}
            {user.id ? <><SideBar container item xs={4}><NewComment component={Link} to="/newcomment"><AddCircleIcon/>New</NewComment><NewComment component={Link} to={`/${root}/chat`}><ChatIcon/>Chat</NewComment></SideBar></> : null }
            </CommentContainer>
        </motion.div>
        :
        <>
        <h2>Loading</h2>
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