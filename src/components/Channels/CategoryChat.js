import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import ChatBox from './ChatBox'
import { useLastLocation } from 'react-router-last-location';
import { motion } from "framer-motion";
import consumer from '../../chat'

console.log(consumer)

function CategoryChat({user, topic}) {
    
    useEffect(() => {
        console.log(topic)
        console.log(user)
        if(topic) {
            const subscription = consumer.subscriptions.create({
                channel: "ChatChannel",
                user: user.id,
                category: topic,
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


    const findCategoryId = (category) => {
        switch(category) {
            case "React":
                return 1
                break;
            case "JavaScript":
                return 5
                break;
            case "Ruby on Rails":
                return 4
                break;
            case "Vue":
                return 3
                break;
            case "Angular":
                return 2
                break;
            case "HTML":
                return 6
                break;
            default:
            console.log()
        }
        console.log(category)
    }

    return (
        <motion.div 
        initial="initial"
        animate="animate"
        exit="exit"
        >
            <ChatBox topic={topic} topicId={findCategoryId(topic)}/>
        </motion.div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.user,
        // messages: state.messages,
        // categories: state.categories
    }
}

export default connect(mapStateToProps)(CategoryChat)