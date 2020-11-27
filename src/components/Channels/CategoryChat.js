import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { createMessage, fetchMessages } from '../../redux/Messages/message.action'
import { fetchCategory } from '../../redux/Category/category.action'
import ChatBox from './ChatBox'
import Message from './Message'
import { ChatBoxContainer, ChatTextarea, ChatWindow } from './style'
import { motion } from "framer-motion";
import consumer from '../../chat'

console.log(consumer)

function CategoryChat({user, topic, category, fetchCategory, createMessage}) {
    const [chatMessages, setMessages] = useState({
        feed: [],
        newChatMessages: []
    })

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
                    console.log("recieved", message)
                    console.log(chatMessages, "chat messages")
                    console.log(chatMessages.feed, "feed")
                    setMessages(chatMessages => ({...chatMessages, newChatMessages: [...chatMessages.feed, message]}))
                }
            })

            return () => {
                console.log("unsubscribed")
                subscription.unsubscribe()
            }
        }
    }, [user.username])

    useEffect(() => {
        if (chatMessages) {
            let categoryId = findCategoryId(topic)
            fetchCategory(categoryId).then(category => {
            setMessages({
                feed: category.messages,
                newChatMessages: []
            })
        })
        }
    }, [chatMessages])

    const addMessage = message => {
        createMessage(message)
    }


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
    }

    return (
        <motion.div 
        initial="initial"
        animate="animate"
        exit="exit"
        >
        <h2>Welcome to {topic} chat!</h2>
        <ChatBoxContainer>
            <ChatTextarea>
                <ChatWindow>
                {chatMessages.feed ?
                    <>{chatMessages.feed.map(message => <Message message={message.content} username={message.user_id}/>)}</>
                :
                <h3>Loading</h3>
                }
                </ChatWindow>
                    <ChatBox user={user} addMessage={addMessage} topic={topic} topicId={findCategoryId(topic)}/>
            </ChatTextarea>
        </ChatBoxContainer>
        </motion.div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.user,
        // messages: state.messages,
        category: state.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategory: (category) => dispatch(fetchCategory(category)),
        fetchMessages: () => dispatch(fetchMessages()),
        createMessage: (message) => dispatch(createMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryChat)