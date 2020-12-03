import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import { createMessage } from '../../redux/Messages/message.action'
import { fetchCategoryMessages } from '../../redux/Category/category.action'
import ChatBox from './ChatBox'
import Message from './Message'
import { ChatBoxContainer, ChatImage, ChatTextarea, ChatWindow } from './style'
import { motion } from "framer-motion";
import consumer from '../../chat'
import { Link } from 'react-router-dom'

function CategoryChat({user, image, root, topic, categoryMessages, fetchCategoryMessages, createMessage}) {
    const [chatMessages, setMessages] = useState({
        feed: [],
        newChatMessages: []
    })
    const messagesEndRef = useRef(null)
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
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

    const fixDate = date => {
        let date_test = new Date(date);
        let first = `${date_test}`.slice(4,15)
        let last = `${date_test}`.slice(16,25)
        return `${first} at ${last} EST`
    }

    return (
        <motion.div 
            initial={{transition: transition, opacity: 0.1}}
            animate={{opacity: 1}}
            exit={{opacity: 0.1, transition: transition, scale: 1}}
        >
        <Link to={`/${categoryMessages.root_url}`}><ChatImage src={`${image}`} /></Link>
        <ChatBoxContainer>
            <ChatTextarea>
                <ChatWindow>
                {chatMessages.feed 
                ?
                    <><div>{chatMessages.feed.map(message => <Message date={fixDate(message.created_at)} image={message.user.image} first={message.user.first_name} message={message.content} username={message.user.username}/>)}</div><div ref={messagesEndRef} /></>
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