import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Post({post, lang}) {
    return (
            <h2>{post.title}</h2>
    )
}
