import React, {useState} from 'react'
import { useLastLocation } from 'react-router-last-location';

function NewPost({user}) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
    const lastLocation = useLastLocation();

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({post: {title: title, content: content, category: category, user: author, status: "active"}
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        setTitle("")
        setContent("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    
    return(
        <div style={formDivStyle}>
            <h1>New Post for {lastLocation.pathname}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Category</label>
                    <input value={category} onChange={handleCategoryChange} type="text" placeholder="Category"/>
                </div>
                <div>
                    <label>Title</label>
                    <input value={title} onChange={handleTitleChange} type="text" placeholder="Title"/>
                </div>
                <div>
                    <label>Content</label>
                    <textarea value={content} onChange={handleContentChange} placeholder="Content"/>
                </div>
                <div>
                    <label>Author</label>
                    <input value={user.username} onChange={handleAuthorChange} type="text" placeholder="Author"/>
                </div>
                {console.log(JSON.stringify(lastLocation.pathname))}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPost