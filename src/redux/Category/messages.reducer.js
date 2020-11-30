import { FETCH_CATEGORY_MESSAGES_REQUEST } from './category.types';

const INITIAL_STATE = {
    categoryMessages: [],
};

const categoryMessagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_MESSAGES_REQUEST:
            return action.payload
        default: return state;
    }
};

export default categoryMessagesReducer;