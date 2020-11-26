import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import ChatBox from './ChatBox'
import { useLastLocation } from 'react-router-last-location';
import { motion } from "framer-motion";
import consumer from '../../chat'

console.log(consumer)
// consumer.subscriptions.create({
//     channel: "ChatChannel",
//     category: "React",
// }, {
//     connected: () => console.log("connected"),
//     disconnected: () => console.log("disconnected"),
//     received: message => console.log("received", message)
// })

    const findCategory = (category) => {
        switch(category) {
            case "/reactjs":
                return "React"
                break;
            case "/javascript":
                return "JavaScript"
                break;
            case "/rails":
                return "Ruby on Rails"
                break;
            case "/vue":
                return "Vue"
                break;
            case "/angular":
                return "Angular"
                break;
            case "/html5":
                return "HTML"
                break;
            default:
                console.log()
        }
        console.log(category)
    }

function ReactChat({user}) {
    const lastLocation = useLastLocation();
    const category = findCategory(lastLocation.pathname)
    
    useEffect(() => {
        if(category) {
            const subscription = consumer.subscriptions.create({
                channel: "ChatChannel",
                category: category,
            }, {
                connected: () => console.log("connected"),
                disconnected: () => console.log("disconnected"),
                received: message => console.log("received", message)
            })

            return () => {
                subscription.unsubscribe()
            }
        }
    }, [])


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
        messages: state.messages,
        // categories: state.categories
    }
}

export default connect(mapStateToProps)(ReactChat)