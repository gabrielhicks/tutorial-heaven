import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { createMessage } from '../../redux/Messages/message.action'
import { useLastLocation } from 'react-router-last-location';
import { ChatBoxContainer, ChatTextarea, SendButton, TextArea, ChatWindow } from './style'
import { fetchMessages } from '../../redux/Messages/message.action';
import { fetchCategory } from '../../redux/Category/category.action'
    
function ChatBox({user, handleSubmit, category, fetchCategory, topicId, topic}) {
    const lastLocation = useLastLocation();
    const [content, setContent] = useState("")

    useEffect(() => {
        fetchCategory(topicId)
    }, [])

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const localHandleSubmit = (e) => {
        e.preventDefault()
        handleSubmit({user_id: user.id, content: content, category_id: topicId})
        setContent("")
    }

    const renderMessages = () => {
        // console.log(category)
        if (category.messages) {
            return category.messages.map(message => <h3 key={message.id}>{message.user_id}: {message.content}</h3>)
        } else {
            return <h2>loading</h2>
        }
    }

    return (
        <form onSubmit={localHandleSubmit}>
                <h2>Welcome to {topic} chat!</h2>
        <ChatBoxContainer>
            <ChatTextarea>
                <ChatWindow>
                    {renderMessages()}
                </ChatWindow>
                <TextArea onChange={handleContentChange} value={content}></TextArea>
                <SendButton type="submit">Send</SendButton>
            </ChatTextarea>
        </ChatBoxContainer>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        category: state.category,
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (message) => dispatch(createMessage(message)),
        fetchCategory: (category) => dispatch(fetchCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)