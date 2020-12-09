import { 
    CREATE_USER, 
    LOGIN_USER, 
    LOGOUT_USER,
    FETCH_USERS_REQUEST,
    SET_USER } from './user.types';

export const createUser = (user) => {
    return (dispatch) => {
        fetch(`https://tutorialheavenapi.herokuapp.com/api/v1/users`, {
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
        fetch(`https://tutorialheavenapi.herokuapp.com/api/v1/login`, {
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

export const fetchUsers = () => {
    return (dispatch) => {
        fetch('https://tutorialheavenapi.herokuapp.com/api/v1/users')
        .then(response => response.json())
        .then(users => {
            dispatch(fetchUsersRequest(users))
        })
    }
}

export const setExistingUser = (token) => {
    return (dispatch) => {
        fetch(`https://tutorialheavenapi.herokuapp.com/api/v1/profile`, {
            method: "GET",
                headers: {
            Authorization: `Bearer ${token}` }
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch(setUserRequest(data.user))
            console.log(data)
        })
        .catch(console.log)
    }
}

export const fetchUsersRequest = users => {
    return {
        type: FETCH_USERS_REQUEST,
        payload: users
    }
}

export const setUserRequest = user => {
    return {
        type: SET_USER,
        payload: user
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