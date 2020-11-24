import React, {useState} from 'react'
import { connect } from 'react-redux'
import { useLastLocation } from 'react-router-last-location';

function NewComment({user}) {
    const [body, setBody] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
    const lastLocation = useLastLocation();

    const handleBodyChange = (e) => {
        setBody(e.target.value)
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
            body: JSON.stringify({comment: {body: body, user: author, category: category}
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        setBody("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    
    return(
        <div style={formDivStyle}>
            <h1>New Comment for {lastLocation.pathname}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Category</label>
                    <input value={category} onChange={handleCategoryChange} type="text" placeholder="Category"/>
                </div>
                <div>
                    <label>Body</label>
                    <textarea value={body} onChange={handleBodyChange} placeholder="Body"/>
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

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(NewComment);