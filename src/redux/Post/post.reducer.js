import {
    FETCH_POSTS_REQUEST,
    PATCH_POSTS_REQUEST,
    POST_POSTS_REQUEST,
    DELETE_POSTS_REQUEST,
} from './post.types';

const INITIAL_STATE = {
    posts: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return action.payload;
        case POST_POSTS_REQUEST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case PATCH_POSTS_REQUEST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case DELETE_POSTS_REQUEST:
            return {
                ...state,
                posts: [...state.posts],
            };
        default:
            return state;
    }
};

export default postReducer;
