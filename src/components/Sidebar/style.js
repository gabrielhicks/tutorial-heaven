import styled from 'styled-components'
import { motion } from "framer-motion";
import Grid from '@material-ui/core/Grid';
import {Link, NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export const IconGrid = styled(Grid)`
    position: fixed;
    display: grid-column;
    z-index: 5;
    background-color: transparent;
    img {
        max-width: 100px;
        max-height: 100px;
    }
    margin-right: 0;
    left: 6vw;
    margin-left: 0;
    transform: translate(-15%, -25%);
    margin-top: 20vh;
    @media only screen and (max-width: 750px){
        width: 50vw;
    }
`

export const Icon = styled(Link)`
    transition: all 0.2s ease-in-out;
    color: blue;
    cursor: pointer;
`

export const IconLink = styled(Link)`
    width: 50px;
    z-index: -1;
`

export const PostLink = styled(Link)`
    color: black;
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
    z-index: 10;
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
    z-index: -10;
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
    z-index: -1;
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

export const PostCardGrid = styled(Grid)`
    display: grid;
    @media only screen and (max-width: 750px){
        display: grid-column;
    }
`
export const PostCardImage = styled.img`
    grid-column: 1;
    grid-row: 1;
    width: 100px;
    height: 100px;
    @media only screen and (max-width: 750px){
        justify-self: middle;
        grid-column: 1;
        grid-row: 1;
    }
`
export const PostCardTitle = styled.p`
    justify-self: center;
    font-size: 1.3rem;
    grid-column: 2;
    grid-row: 1;
    @media only screen and (max-width: 750px){
        font-size: 1rem;
        grid-column: 1;
        grid-row: 2;
    }
`

export const PostCardDate = styled.p`
    font-size: 11px;
    grid-column: 1;
    grid-row: 3;
    @media only screen and (max-width: 750px){
        grid-column: 1;
        grid-row: 4;
    }
`

export const PostCardAuthor = styled.p`
    grid-column: 1;
    grid-row: 2;
`

export const PostCardComments = styled.p`
    grid-column: 3;
    grid-row: 2;
    justify-self: right;
    @media only screen and (max-width: 750px){
        grid-column: 1;
        grid-row: 3;
    }
`

export const PostCardStatus = styled.p`
    grid-column: 2;
    grid-row: 2;
    justify-self: center;
    @media only screen and (max-width: 750px){
        grid-column: 1;
        grid-row: 3;
        justify-self: left;
    }
`

export const Title = styled.h2`
    position: absolute;
    font-weight: normal;
    font-size: 5rem;
    top: 15vh;
    right: 10vw;
    z-index: -1;
`