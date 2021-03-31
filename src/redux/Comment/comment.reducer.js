import {
  FETCH_COMMENTS_REQUEST,
  // PATCH_COMMENTS_REQUEST,
  // POST_COMMENTS_REQUEST,
  // DELETE_COMMENTS_REQUEST
} from './comment.types';

const INITIAL_STATE = {
  comments: [],
};

const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return action.payload;
    // case POST_COMMENTS_REQUEST:
    //     return {
    //         ...state, count: state.count - 1,
    //     };
    // case PATCH_COMMENTS_REQUEST:
    //     return {
    //         ...state, count: state.count - 1,
    //     };
    // case DELETE_COMMENTS_REQUEST:
    //     return {
    //         ...state, count: state.count - 1,
    //     };
    default:
      return state;
  }
};

export default commentReducer;
