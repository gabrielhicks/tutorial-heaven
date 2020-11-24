import React, {useState} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../redux/User/user.action'

function Login(props){
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
        <div>
            <div style={formDivStyle}>
            <h1>Log In</h1>
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
        </div>
    )
} 

const mapDispatchToProps = (dispatch) => {
    return {handleSubmit: (user) => dispatch(loginUser(user))}
}

export default connect(null, mapDispatchToProps)(Login)