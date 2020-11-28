import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const PostCard = styled(Paper)`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 60vw;
    min-height: 20vw;
`

export const PostTitle = styled.h2`
    margin: auto;
    font-size: 2rem;
    max-width: 40vw;
    grid-column: 2;
    grid-row: 1;
`

export const PostContent = styled.p`
    margin: auto;
    max-width: 40vw;
    grid-column: 2;
    grid-row: 2;
`

export const PostImage = styled.img`
    max-width: 150px;
    border-radius: 10px;
    grid-column: 1;
    grid-row: 1;
`

export const PostInfo = styled.div`
text-align: left;
    grid-column: 1;
    grid-row: 2;
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