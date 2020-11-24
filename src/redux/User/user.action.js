import { 
    CREATE_USER, 
    LOGIN_USER, 
    LOGOUT_USER } from './user.types';

export const createUser = (user) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUserRequest(data.user))
            console.log(data.user)
        })
        .catch(console.log)
    }
}

export const loginUser = (user) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUserRequest(data.user))
        })
        .catch(console.log)
    }
}

export const createUserRequest = user => {
    return {
        type: CREATE_USER,
        payload: user
    }
}

export const loginUserRequest = user => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}


export const logoutUserRequest = () => {
    return {
        type: LOGOUT_USER,
    }
}