import React from 'react'
import {connect} from 'react-redux'
import { motion } from "framer-motion";

function Profile({user}) {
    return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        >
            <h2>Hi {user.username}!</h2>
        </motion.div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Profile);