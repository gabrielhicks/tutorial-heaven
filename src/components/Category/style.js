import styled from 'styled-components'
import { motion } from "framer-motion";
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export const IconGrid = styled(Grid)`
    background-color: transparent;
    img {
        max-width: 200px;
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
    width: 200px;
`

export const PostLink = styled(Link)`
    color: black;
    text-decoration: none;
`

export const MotionImage = styled(motion.img)`

`

export const NewPost = styled(Button)`
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

export const PostContainer = styled(Grid)`
    ${'' /* background-color: rgba(212, 212, 214, 0.1); */}
    max-width: 80vw;
    left: 10vw;
    top: 40vh;
    position: absolute;
    z-index: 0;
`

export const PostCard = styled(Paper)`
    position: relative;
    text-align: "inline";
    ${'' /* border: 1px solid rgba(0,0,0,0.5); */}
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

export const Title = styled.h2`
    position: absolute;
    font-weight: normal;
    font-size: 5rem;
    top: 15vh;
    right: 10vw;
    z-index: 1;
`