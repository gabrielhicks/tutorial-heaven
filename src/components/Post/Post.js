import React from 'react'
import {connect} from 'react-redux'
import Comment from '../Comment/Comment'
import Button from '@material-ui/core/Button';
import {CommentContainer, NewComment} from '../Comment/style'


function Post({post, lang, user}) {
    function renderComments(){
        return post.comments.map(comment => <Comment comment={comment}></Comment>)
    }

    return (
        <>
            <CommentContainer
            container
            direction="column"
            // justify="center"
            alignItems="center"
            >
            <h2>{post.title} - {post.category.topic}</h2>
            <p>{post.content}</p>
            {post.comments.length === undefined ? (<h1>loading</h1>) : <>{renderComments()}<br />{user.id ? <Button><NewComment to="/newcomment">Add Comment</NewComment></Button> : null }</>}
            </CommentContainer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Post);