import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {Logo, StyledToolbar} from './styles'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
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
        <AppBar color="red">
            <StyledToolbar>
            <a href="/"><img width="50px;" alt="Tutorial Heaven" src="https://img.icons8.com/pastel-glyph/64/ladder--v1.png"/></a><Logo>Tutorial Heaven</Logo>
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