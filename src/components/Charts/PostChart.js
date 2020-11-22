import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {PostChartContainer} from './style'
import {fetchPosts} from '../../redux/Post/post.action'

function PostChart({fetchPosts, posts}) {
    useEffect(() => {
        fetchPosts()
    }, [])

    function filteredPosts() {
        return posts.filter(post => post.category.topic === "React").map(post => <h1>This is a {post.id}</h1>)
    }

    return posts.length !== 32 ? (<h1>loading</h1>) : (
        <PostChartContainer>
            {filteredPosts()}
        </PostChartContainer>
    )
}


const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostChart)