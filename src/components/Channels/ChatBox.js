import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { createMessage } from '../../redux/Messages/message.action'
import { useLastLocation } from 'react-router-last-location';
import { ChatBoxContainer, ChatTextarea, SendButton, TextArea, ChatWindow } from './style'
import { fetchMessages } from '../../redux/Messages/message.action';
import { fetchCategory } from '../../redux/Category/category.action'
    
function ChatBox({user, addMessage, topicId}) {
    const [content, setContent] = useState("")

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const localHandleSubmit = (e) => {
        e.preventDefault()
        addMessage({user_id: user.id, content: content, category_id: topicId})
        setContent("")
    }

    return (
        <form onSubmit={localHandleSubmit}>
            <TextArea onChange={handleContentChange} value={content}></TextArea>
            <SendButton type="submit">Send</SendButton>
        </form>
    )
}


export default ChatBox