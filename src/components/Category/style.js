import styled from 'styled-components'
import { motion } from "framer-motion";
import Grid from '@material-ui/core/Grid';
import {Link, NavLink} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

export const IconGrid = styled(Grid)`
    background-color: transparent;
    img {
        width: 100px;
    }
    position: relative;
    top: 5vh;
    left: 15vw;
    transform: translate(-15%, -25%);
    margin-top: 25vh;
    @media only screen and (max-width: 600px){
        a {
            margin-bottom: 3vh;
        }
        img {
            width: 50px;
        }
        display: flex;
        top: 25vh;
        left: 25vw;
        margin-top: 5vh;
        ${'' /* flex-direction: column; */}
        transform: translate(-25%, -25%);
    }
`

export const Icon = styled(motion.a)`
    transition: all 0.2s ease-in-out;
    cursor: normal;
`

export const IconLink = styled(Link)`

`

export const PostLink = styled(Link)`
    color: black;
    text-decoration: none;
`

export const MotionImage = styled(motion.img)`

`

export const NewPost = styled(Link)`
    text-decoration: none;
    z-index: 100;
`

export const PostContainer = styled(Grid)`
    background-color: rgba(0, 0, 0, 0.1);
    max-width: 80vw;
    left: 10vw;
    top: 40vh;
    position: absolute;
    z-index: -999;
`

export const PostCard = styled(Paper)`
    position: relative;
    text-align: "inline";
    border: 1px solid rgba(0,0,0,0.5);
    margin: -1px;
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

export const Title = styled.h2`
    position: absolute;
    font-weight: normal;
    font-size: 5rem;
    top: 15vh;
    right: 10vw;
    z-index: 1;
`