import React from 'react'

export default function Message({username, message}) {
    return (
        <>
            <p>{username}: {message}</p>
        </>
    )
}
