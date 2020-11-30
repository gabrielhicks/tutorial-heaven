import { FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_MESSAGES_REQUEST} from './category.types';

export const fetchCategory = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/categories/${id}`)
        .then(response => response.json())
        .then(category => {
            dispatch(fetchCategoryRequest(category))
        })
    }
}

export const fetchCategoryRequest = category => {
    return {
        type: FETCH_CATEGORY_REQUEST,
        payload: category
    }
}

export const fetchCategoryMessages = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/messages/${id}`)
        .then(response => response.json())
        .then(categoryMessages => {
            dispatch(fetchCategoryMessagesRequest(categoryMessages))
        })
    }
}

export const fetchCategoryMessagesRequest = categoryMessages => {
    return {
        type: FETCH_CATEGORY_MESSAGES_REQUEST,
        payload: categoryMessages
    }
}