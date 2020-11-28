import React from 'react'
import { motion } from "framer-motion";
import {IconGrid, Icon, HomeWrapper, HeroImage} from './style';

export default function Homepage() {
    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
    return (
        <HomeWrapper>
        <motion.div
            initial={{
                y: "-150%",
                x: "0",
                width: "100vw",
                transition: { delay: 1.0, ...transition },
                opacity: 0.1
            }}
            animate={{opacity: 1, y: 0, trasnition: { delay: 1.0, ...transition }}}
            exit={{
                y: "-80%",
                x: "0",
                width: "100vw",
                transition: transition,
                opacity: 0.1
            }}
        >
        <IconGrid
        container
        direction="row"
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
        <HeroImage />
        </motion.div>
        </HomeWrapper>
    )
}
