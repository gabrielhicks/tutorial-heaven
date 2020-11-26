import { FETCH_CATEGORY_REQUEST } from './category.types';

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