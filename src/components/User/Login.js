import React, {useState} from 'react'
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";
import {loginUser} from '../../redux/User/user.action'
import { motion } from "framer-motion";

function Login(props){
    const history = useHistory();
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
        return history.goBack()
    }

    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    return(
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        >
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
        </motion.div>
    )
} 

const mapDispatchToProps = (dispatch) => {
    return {handleSubmit: (user) => dispatch(loginUser(user))}
}

export default connect(null, mapDispatchToProps)(Login)