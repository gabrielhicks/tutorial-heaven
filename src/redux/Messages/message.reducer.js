import { 
    FETCH_MESSAGES_REQUEST, 
    PATCH_MESSAGES_REQUEST, 
    POST_MESSAGES_REQUEST, 
    DELETE_MESSAGES_REQUEST } from './message.types';

const INITIAL_STATE = {
    messages: [],
};

const messageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_REQUEST:
            return action.payload
        case POST_MESSAGES_REQUEST:
            return {...state, messages: [...state.messages, action.payload]}
        // case PATCH_MESSAGES_REQUEST:
        //     return {
        //         ...state, count: state.count - 1,
        //     };
        // case DELETE_MESSAGES_REQUEST:
        //     return {
        //         ...state, count: state.count - 1,
        //     };
        default: return state;
    }
};

export default messageReducer;