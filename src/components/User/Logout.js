import React from 'react'
import {connect} from 'react-redux'
import {logoutUserRequest} from '../../redux/User/user.action'

function Logout(props) {

    const localHandleSubmit = () => {
        props.handleSubmit()
    }

    return (
        <div>
            {localHandleSubmit()}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {handleSubmit: () => dispatch(logoutUserRequest())}
}

export default connect(null, mapDispatchToProps)(Logout)