import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

export const Logo = styled(Typography)`
    padding-left: 10px;
    font-weight: normal;
    margin: 0;
    font-size: 1.4rem;
`

export const StyledToolbar = styled(Toolbar)`
    padding-left: 10px;
    img {
        margin-top: 5px;
        }
    .login-button {
        position: absolute;
        right: 1vw;
    }
`