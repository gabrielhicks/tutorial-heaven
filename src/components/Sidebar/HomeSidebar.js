import React from 'react'
import { motion } from "framer-motion";
import {IconGrid, Icon} from './style';
import RailsIcons from './RailsIcons';
import ReactIcons from './ReactIcons';
import JavascriptIcons from './JavascriptIcons';
import AngularIcons from './AngularIcons';
import VueIcons from './VueIcons';
import HtmlIcons from './HtmlIcons';

function HomeSidebar({root}) {

    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

    return (
            <motion.div
            initial={{transition: transition}}
            animate={{zIndex: -100}}
            exit={{opacity: 1, transition: transition, scale: 1}}
            >
                <IconGrid
                container
                direction="column"
                justify="space-evenly"
                alignItems="baseline"
                >
                <Icon to="/reactjs"><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="ReactJS" src="https://i.ibb.co/yY881s1/react.webp"/></Icon>
                <Icon to="/rails" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="Ruby on Rails" src="https://i.ibb.co/3cXmQhY/ruby.webp" /></Icon>
                <Icon to="/javascript" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="JavaScript" src="https://i.ibb.co/pKCyJS6/JS.webp"/></Icon>
                <Icon to="/angular" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="AngularJS" src="https://i.ibb.co/r2jh9YP/angular.webp" /></Icon>
                <Icon to="/vue" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="VueJS" src="https://i.ibb.co/SVXP96Y/vue.webp" /></Icon>
                <Icon to="/html5" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="HTML5" src="https://i.ibb.co/BqshWT1/html.webp" /></Icon>
                </IconGrid>
            </motion.div>
    )
}

export default HomeSidebar