import { FETCH_USERS_REQUEST } from './user.types';

const INITIAL_STATE = {
    users: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return action.payload;
        default:
            return state;
    }
};

export default usersReducer;
