import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { createMessage } from '../../redux/Messages/message.action'
import { useLastLocation } from 'react-router-last-location';
import { ChatBoxContainer, ChatTextarea, SendButton, TextArea, ChatWindow } from './style'
import { fetchMessages } from '../../redux/Messages/message.action';

function ChatBox({user, handleSubmit, messages, fetchMessages}) {
    useEffect(() => {
        fetchMessages()
    }, [])

    // const [username, setUsername] = useState("")
    const [content, setContent] = useState("")
    const lastLocation = useLastLocation();
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

    // const handleUsernameChange = (e) => {
    //     setUsername(user.username)
    // }

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const localHandleSubmit = (e) => {
        e.preventDefault()
        let category_id = findCategory(lastLocation.pathname)
        console.log({user, content, category_id: category_id})
        handleSubmit({user_id: user.id, content: content, category_id: category_id})
        setContent("")
    }

    const renderMessages = () => {
        if(messages.length > 0) {
            return messages.map(message => <h3 key={message.id}>{message.user.username}: {message.content}</h3>)
        } else {
            return <h3>Please type to chat...</h3>
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
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (message) => dispatch(createMessage(message)),
        fetchMessages: () => dispatch(fetchMessages()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)
