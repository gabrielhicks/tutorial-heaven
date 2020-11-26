import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { createMessage } from '../../redux/Messages/message.action'
import { useLastLocation } from 'react-router-last-location';
import { ChatBoxContainer, ChatTextarea, SendButton, TextArea, ChatWindow } from './style'
import { fetchMessages } from '../../redux/Messages/message.action';
import { fetchCategory } from '../../redux/Category/category.action'


    const findCategory = (category) => {
        switch(category) {
            case "/reactjs":
                return 1
                break;
            case "/javascript":
                return 5
                break;
            case "/rails":
                return 4
                break;
            case "/vue":
                return 3
                break;
            case "/angular":
                return 2
                break;
            case "/html5":
                return 6
                break;
            default:
            console.log()
        }
        console.log(category)
    }
    
function ChatBox({user, handleSubmit, messages, category, fetchCategory}) {
    const lastLocation = useLastLocation();
    const category_id = findCategory(lastLocation.pathname)
    const [content, setContent] = useState("")

    useEffect(() => {
        fetchCategory(1)
    }, [])

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const localHandleSubmit = (e) => {
        e.preventDefault()
        let category_id = findCategory(lastLocation.pathname)
        handleSubmit({user_id: user.id, content: content, category_id: category_id})
        setContent("")
    }

    const renderMessages = () => {
        console.log(category)
        if (category.messages) {
            return category.messages.map(message => <h3 key={message.id}>{message.user_id}: {message.content}</h3>)
        } else {
            return <h2>loading</h2>
        }
    }

    return (
        <form onSubmit={localHandleSubmit}>
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
        fetchMessages: () => dispatch(fetchMessages()),
        fetchCategory: (category) => dispatch(fetchCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)