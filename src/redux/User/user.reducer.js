import { 
    CREATE_USER, 
    LOGIN_USER, 
    LOGOUT_USER,
    SET_USER } from './user.types';

const INITIAL_STATE = {
    user: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_USER:
            return [...state, action.payload]
        case LOGIN_USER:
            return action.payload
        case LOGOUT_USER:
            return []
        case SET_USER:
            return action.payload
        default: return state;
    }
};

export default userReducer;