import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';

export const MyFab = styled(Fab)`

`

export const YourFab = styled(Fab)`

`

export const StyledForm = styled.form`
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0;
    margin-right: 1vw;
    width: 56vw;
    height: 10vh;
`

export const MyText = styled.p`
    &:hover {
        background-color: rgba(212, 212, 214, 0.2);
    }
`

export const YourText = styled.p`
    &:hover {
        background-color: rgba(212, 212, 214, 0.2);
    }
`

export const ChatBoxContainer = styled(Paper)`
    position: relative;
    background-color: rgba(199, 237, 230, 1);
    margin: auto;
    display: flex;
    margin-top: 5vh;
    width: 60vw;
    height: 80vh;
    ${'' /* border: 1px solid black; */}
    align-items: flex-end;
`

export const SendButton = styled(Button)`
    background-color: rgba(0, 0, 0, 0.1);
    ${'' /* position: relative; */}
    height: 100%;
    width: 6vw;
    margin-right: 0px;
    float: right;
    padding: auto;
`
export const TextArea = styled.textarea`
    position: relative;
    padding-right: 1vw;
    width: 50vw;
    height: 10vh;
    resize: none;
    outline: none;
    border: none;
`

export const ChatWindow = styled(Paper)`
    position: absolute;
    bottom: 10vh;
    width: 56vw;
    height: 68vh;
    margin-bottom: 4px;
    overflow-y: auto;
`


export const ChatTextarea = styled(Paper)`
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0;
    margin-left: 2vw;
    margin-right: 1vw;
    margin-bottom: 1vh;
    width: 56vw;
    height: 10vh;
    ${'' /* form {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0;
    margin-right: 1vw;
    width: 56vw;
    height: 10vh;
    } */}
`