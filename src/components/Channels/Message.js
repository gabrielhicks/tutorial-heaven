import React from 'react'
import Fab from '@material-ui/core/Fab';
import {YourFab, MyFab, YourText, MyText} from './style'
import {connect} from 'react-redux'

function Message({username, message, user}) {
    return (
        <>
        {username === user.username
            ?
            <YourText>
            <YourFab size="small"><img z-index="0" width="46px" src="https://i.ibb.co/R6F3bWR/favicon.webp" /></YourFab>&nbsp;&nbsp;
            <b style={{color: "rgba(154, 173, 146, 1)"}}>{username}</b>:&nbsp;&nbsp;{message}
            </YourText>
            :
            <MyText>
            <MyFab size="small"><img z-index="0" width="46px" src="https://i.ibb.co/R6F3bWR/favicon.webp" /></MyFab>&nbsp;&nbsp;
            <b style={{color: "rgba(251, 158, 94, 1)"}}>{username}:</b>&nbsp;&nbsp;{message}
            </MyText>
        }
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Message)