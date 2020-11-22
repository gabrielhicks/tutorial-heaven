import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {Logo, StyledToolbar} from './styles'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        flexGrow: 1,
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    loginButton: {
        marginRight: theme.spacing(2),
    },
}));

function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

export default function BackToTop(props) {
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar color="inherit">
            <StyledToolbar>
            <Link to="/"><img width="50px;" alt="Tutorial Heaven" src="https://img.icons8.com/pastel-glyph/64/ladder--v1.png"/></Link><Logo>Tutorial Heaven</Logo>
            <Link to="/profile" color="inherit">Profile</Link>
            <Button className="login-button" color="inherit"><Link to="/login">Login</Link></Button>
            </StyledToolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
            <Fab color="inherit" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
        </React.Fragment>
    );
}