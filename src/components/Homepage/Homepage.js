import React from 'react'
import { motion } from "framer-motion";
import {IconGrid, Icon, HomeWrapper} from './style';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Homepage() {
    return (
        <HomeWrapper>
        <IconGrid
        container
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
        >
            <Icon to="/reactjs"><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="ReactJS" src="https://i.ibb.co/HqZ0RMF/ezgif-5-5320ccde36a0.webp"/></Icon>
            <Icon to="/rails" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="Ruby on Rails" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png" /></Icon>
            <Icon to="/javascript" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="JavaScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"/></Icon>
            <Icon to="/angular" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="AngularJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png" /></Icon>
            <Icon to="/vue" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="VueJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/200px-Vue.js_Logo_2.svg.png" /></Icon>
            <Icon to="/html5" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="HTML5" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/full/html5.png" /></Icon>
        </IconGrid>
        </HomeWrapper>
    )
}
