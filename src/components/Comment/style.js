import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { motion } from "framer-motion";

export const CommentContainer = styled(Grid)`
    position: relative;
    max-width: 80vw;
    left: 13vw;
    padding: 2rem;
    padding-left: 0;
    z-index: 1;
`

export const CommentCard = styled(Paper)`
    position: relative;
    text-align: "inline";
    margin: -1px;
    margin-top: 20px;
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

export const NewCommentStyle = styled(Button)`
    margin-top: 1vh;
    background-color: rgba(212, 212, 214, 1);
    margin-right: 5px;
    padding: 5px;
    width: 75px;
    text-decoration: none;
    z-index: 100;
`

export const SideBar = styled.div`
    position: fixed;
    z-index: -10;
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
export const MyForm = styled(motion.div)`
    background-color: white;
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`