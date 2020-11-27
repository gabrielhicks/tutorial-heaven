import { 
    FETCH_MESSAGES_REQUEST, 
    PATCH_MESSAGES_REQUEST, 
    POST_MESSAGES_REQUEST, 
    DELETE_MESSAGES_REQUEST } from './message.types';

export const fetchMessages = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/messages')
        .then(response => response.json())
        .then(messages => {
            dispatch(fetchMessagesRequest(messages))
        })
    }
}

// export const updateMessages = (message) => {
//     return (dispatch) => {
        
//     }
// }

export const createMessage = (message) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({message: message})
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch(postMessagesRequest(data.message))
            console.log(data.message)
        })
        .catch(console.log)
    }
}

export const fetchMessagesRequest = message => {
    return {
        type: FETCH_MESSAGES_REQUEST,
        payload: message
    }
}

export const postMessagesRequest = () => {
    return {
        type: POST_MESSAGES_REQUEST
    }
}

export const patchMessagesRequest = () => {
    return {
        type: PATCH_MESSAGES_REQUEST
    }
}

export const deleteMessagesRequest = () => {
    return {
        type: DELETE_MESSAGES_REQUEST
    }
}