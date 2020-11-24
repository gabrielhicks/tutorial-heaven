import React from 'react'
import Comment from '../Comment/Comment'
import {CommentContainer} from '../Comment/style'
import { NavLink } from 'react-router-dom';


export default function Post({post, lang}) {
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
            {renderComments()}
            </CommentContainer>
        </>
    )
}
