import { Paper } from '@material-ui/core'
import { motion } from "framer-motion";
import styled from 'styled-components'

export const MaskDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
`

export const PostCard = styled(Paper)`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 50vw;
    min-width: 50vw;
    min-height: 20vw;
`

export const PostTitle = styled.h2`
    margin: auto;
    font-size: 2rem;
    max-width: 40vw;
    grid-column: 2;
    grid-row: 1;
    @media only screen and (max-width: 750px){
        font-size: 1.5rem;
        grid-column: 1;
        grid-row: 2;
    }
`

export const PostContent = styled.p`
    margin: auto;
    max-width: 40vw;
    grid-column: 2;
    grid-row: 2;
    @media only screen and (max-width: 750px){
        grid-column: 1;
        grid-row: 3;
        max-width: 60vw;
    }
`

export const PostImage = styled.img`
    max-width: 150px;
    border-radius: 10px;
    grid-column: 1;
    grid-row: 1;
    @media only screen and (max-width: 750px){
        justify-self: center;
        grid-column: 1;
        grid-row: 1;
    }
`

export const PostInfo = styled.div`
text-align: left;
    grid-column: 1;
    grid-row: 2;
    @media only screen and (max-width: 750px){
        text-align: center;
        grid-column: 1;
        grid-row: 4;
    }
`

export const MyForm = styled(motion.div)`
    background-color: white;
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`

export const PostCardDate = styled.p`
    font-size: 11px;
    grid-column: 1;
    grid-row: 4;
    @media only screen and (max-width: 750px){
        justify-self: center;
        grid-column: 1;
        grid-row: 4;
    }
`

export const PostCardAuthor = styled.p`
    grid-column: 1;
    grid-row: 2;
`

export const PostCardRepo = styled.p`
    grid-column: 1;
    grid-row: 3;
`

export const ProjectStatus = styled.b`
    i.status {
        font-weight: 800;
        color: rgba(238, 147, 152, 1);
    }
    i.active {
        font-weight: 800;
        color: rgba(155, 173, 147, 1);
    }
`