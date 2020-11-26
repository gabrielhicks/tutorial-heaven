import React from 'react'
import {connect} from 'react-redux'
import ChatBox from './ChatBox'
import { motion } from "framer-motion";
import consumer from '../../chat'

console.log(consumer)
function ReactChat({user}) {
    consumer.subscriptions.create({
        channel: "ChatChannel",
        id: 1,
    }, {
        connected: () => console.log("connected"),
        disconnected: () => console.log("disconnected"),
        recieved: data => console.log("recieved", data)
    })
    console.log(user.id)

    return (
        <motion.div 
        initial="initial"
        animate="animate"
        exit="exit"
        >
            <ChatBox />
        </motion.div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.user,
        messages: state.messages
    }
}

export default connect(mapStateToProps)(ReactChat)