import React, {useState, useEffect, useContext} from 'react'
import {connect, useDispatch} from 'react-redux'
import { createMessage, fetchMessages } from '../../redux/Messages/message.action'
import { fetchCategory } from '../../redux/Category/category.action'
import ChatBox from './ChatBox'
import { ActionCableContext } from '../../index'
import Message from './Message'
import { ChatBoxContainer, ChatTextarea, ChatWindow } from './style'
import { motion } from "framer-motion";

function CategoryChat({user, topic, category, fetchCategory, createMessage}) {
    const dispatch = useDispatch()
    const cable = useContext(ActionCableContext)
    const [channel, setChannel] = useState(null)
    const [chatMessages, setMessages] = useState({
        feed: [],
        newChatMessages: []
    })

    useEffect(() => {
        const channel = cable.subscriptions.create({
            channel: 'ChatChannel',
            category: topic,
        }, {
            connected: () => console.log("connected"),
            disconnected: () => console.log("disconnected"),
            received: message => {
                console.log("recieved", message)
                dispatch()
            }
        })
        setChannel(channel)
        return () => {
            channel.unsubscribe()
        }
    }, [topic, dispatch])

    const addMessage = (content) => {
        const data = content
        console.log(data)
        channel.send(data)
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
                {/* {chatMessages.feed ?
                    <>{chatMessages.feed.map(message => <Message message={message.content} username={message.user_id}/>)}</>
                :
                <h3>Loading</h3>
                } */}
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