import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const HomeWrapper = styled.div`
    ${'' /* background-color: black; */}
    background-color: transparent;
`

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

    @media only screen and (max-width: 1200px){
        a {
            margin-bottom: 3vh;
        }
        img {
            width: 125px;
        }
        display: flex;
        top: 25vh;
        left: 25vw;
        margin-top: 5vh;
        ${'' /* flex-direction: column; */}
        transform: translate(-25%, -25%);
    }

    @media only screen and (max-width: 750px){
        a {
            margin-bottom: 3vh;
        }
        img {
            width: 100px;
        }
        display: flex;
        top: 25vh;
        left: 25vw;
        margin-top: 5vh;
        ${'' /* flex-direction: column; */}
        transform: translate(-25%, -25%);
    }

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

export const HeroImage = styled.div`
    background-image: url("https://i.ibb.co/xjcFZdV/cloud.webp");
    background-attachment: fixed;
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100vw;
    z-index: 100;
`

export const Icon = styled(Link)`
    transition: all 0.2s ease-in-out;
    cursor: pointer;
`