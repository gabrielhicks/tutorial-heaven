import React from 'react'
import {connect} from 'react-redux'
import {logoutUserRequest} from '../../redux/User/user.action'
import { motion } from "framer-motion";

function Logout(props) {

    const localHandleSubmit = () => {
        props.handleSubmit()
    }

    return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        >
            {localHandleSubmit()}
        </motion.div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {handleSubmit: () => dispatch(logoutUserRequest())}
}

export default connect(null, mapDispatchToProps)(Logout)