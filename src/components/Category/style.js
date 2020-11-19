import styled from 'styled-components'
import { motion } from "framer-motion";
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'

export const IconGrid = styled(Grid)`
    img {
        max-width: 100px;
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
            max-width: 75px;
        }
        display: flex;
        top: 25vh;
        left: 25vw;
        margin-top: 5vh;
        flex-direction: column;
        transform: translate(-25%, -25%);
    }
`

export const Icon = styled(motion.a)`
    transition: all 0.2s ease-in-out;
    cursor: normal;
`

export const MotionImage = styled(motion.img)`
    ${'' /* position: relative;
    top: 29vh;
    left: 8vw; */}
    ${'' /* transform: translate(-15%, -25%); */}
    ${'' /* margin-top: 25vh; */}
`