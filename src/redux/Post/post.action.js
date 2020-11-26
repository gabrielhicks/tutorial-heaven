import { 
    FETCH_POSTS_REQUEST, 
    PATCH_POSTS_REQUEST, 
    POST_POSTS_REQUEST, 
    DELETE_POSTS_REQUEST } from './post.types';

export const fetchPosts = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts')
        .then(response => response.json())
        .then(posts => {
            // console.log(posts)
            dispatch(fetchPostsRequest(posts))
        })
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({post: post})
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch(postPostsRequest(data.post))
            console.log(data.post)
        })
        .catch(console.log)
    }
}

export const fetchPostsRequest = posts => {
    return {
        type: FETCH_POSTS_REQUEST,
        payload: posts
    }
}

export const postPostsRequest = () => {
    return {
        type: POST_POSTS_REQUEST
    }
}

export const patchPostsRequest = () => {
    return {
        type: PATCH_POSTS_REQUEST
    }
}

export const deletePostsRequest = () => {
    return {
        type: DELETE_POSTS_REQUEST
    }
}