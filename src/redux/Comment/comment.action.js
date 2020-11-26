import { 
    FETCH_COMMENTS_REQUEST, 
    PATCH_COMMENTS_REQUEST, 
    POST_COMMENTS_REQUEST, 
    DELETE_COMMENTS_REQUEST } from './comment.types';

export const fetchComments = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/comments')
        .then(response => response.json())
        .then(comments => {
            // console.log(comments)
            dispatch(fetchCommentsRequest(comments))
        })
    }
}


export const createComment = (comment) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({comment: comment})
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch(postCommentsRequest(data.comment))
            console.log(data.comment)
        })
        .catch(console.log)
    }
}

export const fetchCommentsRequest = comment => {
    return {
        type: FETCH_COMMENTS_REQUEST,
        payload: comment
    }
}

export const postCommentsRequest = () => {
    return {
        type: POST_COMMENTS_REQUEST
    }
}

export const patchCommentsRequest = () => {
    return {
        type: PATCH_COMMENTS_REQUEST
    }
}

export const deleteCommentsRequest = () => {
    return {
        type: DELETE_COMMENTS_REQUEST
    }
}