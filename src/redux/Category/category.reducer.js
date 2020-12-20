import { FETCH_CATEGORY_REQUEST } from './category.types';

const INITIAL_STATE = {
    category: [],
};

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST:
            return action.payload;
        default:
            return state;
    }
};

export default categoryReducer;
