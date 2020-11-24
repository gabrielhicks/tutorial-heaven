import React from 'react'
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

export default function Comment({comment}) {
    const classes = useStyles();

    return (
            <GridItem key={comment.id} item xs={10}>
                <CommentCard className={classes.paper}>
                    <p>
                    <b>{comment.body}</b>
                    <br />
                    --- {comment.user.username}
                    </p>
                </CommentCard>
            </GridItem>
    )
}