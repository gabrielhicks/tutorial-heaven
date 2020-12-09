import React from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {CommentCard, GridItem, LikeButton} from './style'

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

    const fixDate = date => {
        let date_test = new Date(date);
        let first = `${date_test}`.slice(4,15)
        let last = `${date_test}`.slice(16,25)
        return `${first} at ${last} EST`
    }

    return (
            <GridItem key={comment.id} item xs={10}>
                <CommentCard className={classes.paper}>
                    <p>
                    <>{comment.body}</>
                    <br />
                    <b>{comment.user.username}</b> <i style={{fontSize: "9px"}}>posted at {fixDate(comment.created_at)}</i>
                    </p>
                    {user.username === comment.user.username ? <LikeButton><img alt={`${comment.id}`} src="https://i.ibb.co/TTScPT8/delete.webp" /></LikeButton> : null}
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