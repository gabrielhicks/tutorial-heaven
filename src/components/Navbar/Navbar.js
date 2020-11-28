import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {Logo, StyledToolbar, StyledMenu, StyledIconButton, NavWrapper, StyledFab} from './styles'
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

function Navbar({user}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <CssBaseline />
        <AppBar style={{backgroundColor: "rgba(203, 218, 237, 1)", color: "black"}}>
            <StyledToolbar>
            <Link to="/"><img width="50px;" alt="Tutorial Heaven" src="https://img.icons8.com/pastel-glyph/64/ladder--v1.png"/></Link><Logo>Tutorial Heaven</Logo>
            {user.id ?
            <NavWrapper>
            <StyledIconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
            <AccountCircle />
            </StyledIconButton>
            <StyledMenu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                >
                <MenuItem component={Link} to="/profile" onClick={handleClose}>Profile</MenuItem>
                <MenuItem component={Link} to="/logout" onClick={handleClose}>Sign Out</MenuItem>
            </StyledMenu>
            </NavWrapper>
            :
            <>
            <Button style={{right: "1vw", position: "absolute"}} component={Link} to="/login" className="login-button" color="inherit">Log In</Button>
            <Button style={{right: "90px", position: "absolute"}} component={Link} to="/signup" className="signup-button" color="inherit">Sign Up</Button>
            </>
            }
            </StyledToolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop>
            <StyledFab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon style={{color: "black"}}/>
            </StyledFab>
        </ScrollTop>
        </>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Navbar);