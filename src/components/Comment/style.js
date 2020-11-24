import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import {Link, NavLink} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

export const CommentContainer = styled(Grid)`
    background-color: rgba(0, 0, 0, 0.1);
    position: relative;
    max-width: 80vw;
    left: 10vw;
    padding: 2rem;
    ${'' /* top: 40vh; */}
    ${'' /* position: absolute; */}
    z-index: -999;
`

export const CommentCard = styled(Paper)`
    position: relative;
    text-align: "inline";
    border: 1px solid rgba(0,0,0,0.5);
    margin: -1px;
    margin-top: 20px;
    padding-top:
    img {
        width: 6vw;
        float: right;
    }
    p {
        margin-top: 0;
        margin-bottom: 0;
    }
    i.status {
        float: right;
        color: red;
    }
    i.active {
        color: green;
    }
    h3 {
        cursor: pointer;
    }
`

export const GridItem = styled(Grid)`
    display: flex;
`