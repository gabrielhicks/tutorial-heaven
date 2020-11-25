import React from 'react'
import { ChatBoxContainer, ChatTextarea, SendButton, TextArea, ChatWindow } from './style'

export default function ChatBox() {
    return (
        <ChatBoxContainer>
            <ChatTextarea>
                <ChatWindow></ChatWindow>
                <TextArea></TextArea>
                <SendButton>Send</SendButton>
            </ChatTextarea>
        </ChatBoxContainer>
    )
}
