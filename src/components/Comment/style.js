import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ChatIcon from '@material-ui/icons/Chat';

export const CommentContainer = styled(Grid)`
    position: relative;
    max-width: 80vw;
    left: 10vw;
    padding: 2rem;
    z-index: 0;
`

export const CommentCard = styled(Paper)`
    position: relative;
    text-align: "inline";
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
        font-weight: 800;
        color: rgba(238, 147, 152, 1);
    }
    i.active {
        font-weight: 800;
        color: rgba(155, 173, 147, 1);
    }
    h3 {
        cursor: pointer;
    }
`

export const GridItem = styled(Grid)`
    display: flex;
`

export const NewComment = styled(Button)`
    margin-top: 1vh;
    background-color: rgba(212, 212, 214, 1);
    margin-right: 5px;
    padding: 5px;
    width: 75px;
    text-decoration: none;
    z-index: 9999;
`

export const SideBar = styled.div`
    position: fixed;
    display: inline-column;
    left: 0;
    bottom: -70px;
    ${'' /* top: 250px; */}
    background-color: transparent;
    height: 20vh;
    margin-top: 1.75vh;
    margin-left: 1.75vw;
    width: 3vw;
    text-align: center;
    justify-content: center;
    align-items: center;
`