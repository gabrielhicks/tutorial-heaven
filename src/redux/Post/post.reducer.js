import { 
    FETCH_POSTS_REQUEST, 
    PATCH_POSTS_REQUEST, 
    POST_POSTS_REQUEST, 
    DELETE_POSTS_REQUEST } from './post.types';

const INITIAL_STATE = {
    posts: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                posts: action.payload
            };
        // case POST_POSTS_REQUEST:
        //     return {
        //         ...state, count: state.count - 1,
        //     };
        // case PATCH_POSTS_REQUEST:
        //     return {
        //         ...state, count: state.count - 1,
        //     };
        // case DELETE_POSTS_REQUEST:
        //     return {
        //         ...state, count: state.count - 1,
        //     };
        default: return state;
    }
};

export default postReducer;