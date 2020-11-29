import React, {useState} from 'react'
import {SendButton, StyledForm, TextArea} from './style'
    
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
        <StyledForm onSubmit={localHandleSubmit}>
            <TextArea onChange={handleContentChange} value={content}></TextArea>
            <SendButton style={{backgroundColor: "rgba(251, 250, 206, 1)"}} type="submit">Send</SendButton>
        </StyledForm>
    )
}


export default ChatBox