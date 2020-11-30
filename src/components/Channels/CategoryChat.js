import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import { createMessage } from '../../redux/Messages/message.action'
import { fetchCategoryMessages } from '../../redux/Category/category.action'
import ChatBox from './ChatBox'
import Message from './Message'
import { ChatBoxContainer, ChatTextarea, ChatWindow } from './style'
import { motion } from "framer-motion";
import consumer from '../../chat'

function CategoryChat({user, topic, categoryMessages, fetchCategoryMessages, createMessage}) {
    const [chatMessages, setMessages] = useState({
        feed: [],
        newChatMessages: []
    })
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if(chatMessages.feed) {
        scrollToBottom()
        }
    }, [chatMessages]);

    useEffect(() => {
        fetchCategoryMessages(topic)
    }, [topic])

    useEffect(() => {
        if(categoryMessages) {
            console.log("hi", categoryMessages.messages)
        setMessages({
            feed: categoryMessages.messages,
            newChatMessages: []
        })
        }
    }, [categoryMessages])

    useEffect(() => {
        if(user.username) {
            const subscription = consumer.subscriptions.create({
                channel: "ChatChannel",
                category: topic,
                user: user
            }, {
                connected: () => console.log("connected"),
                disconnected: () => console.log("disconnected"),
                received: message => {
                    setMessages(chatMessages => ({...chatMessages, feed: [...chatMessages.feed, message]}))
                }
            })

            return () => {
                console.log("unsubscribed")
                subscription.unsubscribe()
            }
        }
    }, [user.id])

    const addMessage = message => {
        createMessage(message)
    }

    return (
        <motion.div 
        initial="initial"
        animate="animate"
        exit="exit"
        >
        <h2>Welcome to {categoryMessages.topic} chat!</h2>
        <ChatBoxContainer>
            <ChatTextarea>
                <ChatWindow>
                {chatMessages.feed 
                ?
                    <><div>{chatMessages.feed.map(message => <Message message={message.content} username={message.user.username}/>)}</div><div ref={messagesEndRef} /></>
                :
                <h3>Loading{console.log(chatMessages.feed)}</h3> 
                }
                </ChatWindow>
                    <ChatBox user={user} addMessage={addMessage} topic={topic} topicId={topic}/>
            </ChatTextarea>
        </ChatBoxContainer>
        </motion.div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.user,
        categoryMessages: state.categoryMessages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategoryMessages: (category) => dispatch(fetchCategoryMessages(category)),
        createMessage: (message) => dispatch(createMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryChat)