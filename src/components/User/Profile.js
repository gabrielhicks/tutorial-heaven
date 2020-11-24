import React from 'react'
import {connect} from 'react-redux'

function Profile({user}) {
    return (
        <div>
            <h2>Hi {user.username}!</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Profile);