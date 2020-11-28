import React, {useEffect} from 'react'
import { motion } from "framer-motion";
import {MotionImage, IconGrid, Icon, IconLink, NewPost} from './style'

const pageTransition = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0.1
    }
}

function ReactIcons() {

    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

    return (
        <>
                <motion.div
                initial={{
                    y: "-80%",
                    x: "0",
                    width: "100vw",
                    transition: { delay: 0.5, ...transition },
                    opacity: 1,
                }}
                animate={{opacity: 1}}
                exit="in"
                >
                    <IconGrid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="baseline">
                    <Icon>
                    <MotionImage
                        src="https://i.ibb.co/yY881s1/react.webp"
                        alt='Reactjs'
                        width="200px"
                        height="200px"
                        initial={{ scale: 1, opacity: 0.1 }}
                        animate={{
                            transition: { delay: 0.2, ...transition },
                            scale: 2,
                            opacity: 1,
                            // y: window.innerWidth > 1440 ? 500 : 700,
                        }}
                        exit={{scale: 1, transition: transition, opacity: 0.1}}
                        />
                    </Icon>
                    <IconLink to="/rails"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="Ruby on Rails" src="https://i.ibb.co/3cXmQhY/ruby.webp" /></Icon></IconLink>
                    <IconLink to="/javascript"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="JavaScript" src="https://i.ibb.co/pKCyJS6/JS.webp"/></Icon></IconLink>
                    <IconLink to="/angular"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="AngularJS" src="https://i.ibb.co/r2jh9YP/angular.webp" /></Icon></IconLink>
                    <IconLink to="/vue"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="VueJS" src="https://i.ibb.co/SVXP96Y/vue.webp" /></Icon></IconLink>
                    <IconLink to="/html5"><Icon className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="HTML5" src="https://i.ibb.co/BqshWT1/html.webp" /></Icon></IconLink>
                    </IconGrid>
                </motion.div>
        </>
    )
}

export default ReactIcons