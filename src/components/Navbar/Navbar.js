import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavLogo, NavLinkMobile, MenuIcon, Times, NavItem } from './NavStyle';

class Navbar extends React.Component {
    state = {
        clicked: false
    }

    clickHandler = () => {
        this.setState(()=>({clicked: !this.state.clicked}))
    }

    closeMenu = () => {
        this.setState(()=>({clicked: false}))
    }

    closeMenuLogOut = (e) => {
        this.setState(()=>({clicked: false}))
        this.props.logoutHandler(e)
    }

    onMouseEnter = () => {
        if (window.innerWidth < 960) {
            this.setState(()=>({dropdown: false}))
        } else {
            this.setState(()=>({dropdown: true}))
        }
    };

    onMouseLeave = () => {
        if (window.innerWidth < 960) {
            this.setState(()=>({dropdown: false}))
        } else {
            this.setState(()=>({dropdown: true}))
        }
    }

    itemCount = () => {
        let items = 0;
        for (const item of this.props.cart) {
            items += parseInt(item.quantity)
        }
        return items
    }


    render() {
        return (
        <>
            <Nav>
                <NavLogo onClick={this.closeMenu} to="/"><img alt="Tutorial Heaven" src="https://img.icons8.com/pastel-glyph/64/ladder--v1.png"/>Tutorial Heaven</NavLogo>
                <MenuIcon onClick={this.clickHandler}>
                    {this.state.clicked ? <Times /> : <Bars />}
                </MenuIcon>
                {this.state.clicked ? 
                    <NavMenu className="active">
                    {/* <NavItem><NavLink onClick={this.closeMenu} to="/projects">Projects</NavLink></NavItem> */}
                    <NavItem><NavLink onClick={this.closeMenu} to="/about">Log In</NavLink></NavItem>
                    <NavItem><NavLinkMobile onClick={this.closeMenu} to="/contact">Sign Up</NavLinkMobile></NavItem>
                    </NavMenu>
                : 
                    <NavMenu>
                    {/* <NavItem><NavLink onClick={this.closeMenu} to="/projects">Projects</NavLink></NavItem> */}
                    <NavItem><NavLink onClick={this.closeMenu} to="/about">Log In</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/contact">Sign Up</NavLink></NavItem>
                    </NavMenu>
                }
                {/* <NavBtn>
                    <NavBtnLink to='/login'>sign in</NavBtnLink>
                </NavBtn> */}
            </Nav>
            </>
        )
    }
};

export default Navbar