import { 
    FETCH_POST_REQUEST,} from './post.types';

const INITIAL_STATE = {
    post: []
};

const editPostReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return action.payload
        // case POST_POSTS_REQUEST:
        //     return {
        //         ...state, posts: [...state.posts, action.payload]
        //     };
        // case PATCH_POSTS_REQUEST:
        //     return {
        //         ...state, posts: [...state.posts, action.payload]
        //     };
        // case DELETE_POSTS_REQUEST:
        //     return {
        //         ...state, posts: [...state.posts]
        //     };
        default: return state;
    }
};

export default editPostReducer;