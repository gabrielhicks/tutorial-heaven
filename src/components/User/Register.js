import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createUser} from '../../redux/User/user.action'

function Register(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const localHandleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit({username: username, password: password})
        setUsername("")
        setPassword("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    
    return(
        <div style={formDivStyle}>
            <h1>Sign Up</h1>
            <form onSubmit={localHandleSubmit}>
                <div>
                    <label>Username</label>
                    <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
                </div>
                <div>
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {handleSubmit: (user) => dispatch(createUser(user))}
}

export default connect(null, mapDispatchToProps)(Register)