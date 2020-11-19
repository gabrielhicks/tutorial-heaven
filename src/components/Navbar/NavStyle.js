import FaBars from '@meronex/icons/fa/FaBars';
import FaTimes from '@meronex/icons/fa/FaTimes';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: rgba(94, 95, 98, 1);
    display: block;
    top: 0px;
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    height: 40px;
    justify-content: flex-end;
    padding: 0.5rem;
    padding-right: 0;
    z-index: 10;
    position: sticky;
`

export const NavLogo = styled(Link)`
    img {
        height: 40px;
    }
    margin-top: 2px;
    white-space: nowrap;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    left: 0;
    margin-left: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.25rem;
    @media screen and (max-width: 768px) {
        margin-top: 10px;
        top: 0;
        left: 0;
    }
`

export const NavLink = styled(Link)`
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 56px;
    cursor: pointer;
    &.active {
        color: rgba(255, 255, 255, 1);
    }
    &:hover {
        background-color: rgba(0, 0, 0, 1);
        ${'' /* border-radius: 4px; */}
        transition: all 0.2s ease-out;
    }
    @media screen and (max-width: 768px) {
        b.cart {
        color: red;
        }
        height: auto;
        text-align: center;
        padding: 1.5rem;
        width: 100%;
        display: table-column;
        ${'' /* margin-top: 5px;
        margin-bottom: 15px; */}

        &:hover {
            b.cart {
        color: red;
        }
            background-color: rgba(0, 0, 0, 1);
            border-radius: 0;
        }
    }
`

export const NavLinkMobile = styled(Link)`
    display: none;
    @media screen and (max-width: 768px) {
        box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
        display: block;
        text-align: center;
        padding: 1.2rem;
        margin: 2rem auto;
        margin-top: 43px;
        border-radius: 4px;
        width: 80%;
        background: rgba(110, 110, 110, 1);
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
        &:active {
            letter-spacing: 0.5px;
            -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        }
        &:hover {
            background: rgba(0, 0, 0, 1);
            color: rgba(255, 255, 255, 1);
            transition: 250ms;
        }
    }
`

export const MenuIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: rgba(0, 0, 0, 1);
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.4rem;
        cursor: pointer;
    }
`

export const Times = styled(FaTimes)`
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        color: rgba(0, 0, 0, 1);
        font-size: 1.4rem;
    }
`

export const NavMenu = styled.div`
    display: flex;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    list-style: none;
    align-items: center; 
    text-align: center;
    justify-content: flex-end;
    @media screen and (max-width: 768px) {
        display: none;
        flex-direction: column;
        width: 100vw;
        height: 93vh;
        position: absolute;
        top: 56px;
        ${'' /* right: -120%; */}
        opacity: 1;

        &.active {
            display: inline-table;
            background-color: rgba(110, 110, 110, 0.7);
            right: 0;
            opacity: 1;
            z-index: 1;
        }
    }
`

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    height: 40px;
    @media screen and (max-width: 768px) {
        height: 60px;
    }
`

// export const NavBtn = styled.nav`
//     box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
//     display: flex;
//     align-items: center;
//     position: absolute;
//     right: 15px;
//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `

// export const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: rgba(147, 141, 123, 1);
//     padding: 11px 40px;
//     color: #fff;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     white-space: nowrap;
//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: rgba(181, 181, 161, 1);
//         color: rgba(57, 54, 38, 1);
//     }
//     &:active {
//         letter-spacing: 0.5px;
//         -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
//         -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
//         box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
//     }
// `

// export const DropdownWrapper = styled.ul`
//     li {
//         background: #1888ff;
//         cursor: pointer;
//     }
//     li:hover {
//         background: #5cabff;
//     }
//     clicked {
//         display: none;
//     }
//         background: red;
//         width: 200px;
//         position: absolute;
//         top: 80px;
//         list-style: none;
//         text-align: start;
//     `

// export const DropLink = styled(Link)`
//         display: block;
//         height: 100%;
//         width: 100%;
//         text-decoration: none;
//         color: #fff;
//         padding: 16px;
//     `