import React from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {CommentContainer, CommentCard, GridItem, CommentLink} from './style'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        width: "50vw",
        textAlign: 'left',
        color: theme.palette.text.primary,
    },
}));

function Comment({comment, user}) {
    const classes = useStyles();

    return (
            <GridItem key={comment.id} item xs={10}>
                <CommentCard className={classes.paper}>
                    <p>
                    <>{comment.body}</>
                    <br />
                    <b>{comment.user.username}</b>
                    </p>
                </CommentCard>
            </GridItem>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Comment)