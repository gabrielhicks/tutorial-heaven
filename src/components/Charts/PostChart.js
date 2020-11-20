import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {PostChartContainer} from './style'
import {fetchPosts} from '../../redux/Post/post.action'

function PostChart({posts, fetchPosts}) {
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <PostChartContainer>
            {console.log(posts)}
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