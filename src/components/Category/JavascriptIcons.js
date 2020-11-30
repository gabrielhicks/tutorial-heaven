import React from 'react'
import { motion } from "framer-motion";
import {MotionImage, IconGrid, Icon, IconLink} from './style'

const pageTransition = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0.1
    }
}

function JavascriptIcons() {

    const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

    return (
        <>
                <motion.div
                initial={{
                    y: "-80%",
                    x: "0",
                    width: "100vw",
                    transition: { delay: 0.5, ...transition },
                    opacity: 1
                }}
                animate={{opacity: 1}}
                exit="in"
                >
                    <IconGrid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="baseline">
                    <IconLink to="/reactjs"><Icon to="/reactjs" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="React" src="https://i.ibb.co/yY881s1/react.webp" /></Icon></IconLink>
                    <IconLink to="/rails"><Icon to="/rails" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="Ruby on Rails" src="https://i.ibb.co/3cXmQhY/ruby.webp" /></Icon></IconLink>
                    <Icon>
                    <MotionImage
                        src="https://i.ibb.co/pKCyJS6/JS.webp"
                        alt='JavaScript'
                        width="200px"
                        height="200px"
                        initial={{ scale: 1, opacity: 0.1 }}
                        animate={{
                            transition: { delay: 0.2, ...transition },
                            scale: 2,
                            opacity: 1
                        }}
                        exit={{scale: 1, transition: transition, opacity: 0.1}}
                        />
                    </Icon>
                    <IconLink to="/angular"><Icon to="/angular" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="AngularJS" src="https://i.ibb.co/r2jh9YP/angular.webp" /></Icon></IconLink>
                    <IconLink to="/vue"><Icon to="/vue" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="VueJS" src="https://i.ibb.co/SVXP96Y/vue.webp" /></Icon></IconLink>
                    <IconLink to="/html5"><Icon to="/html5" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="HTML5" src="https://i.ibb.co/BqshWT1/html.webp" /></Icon></IconLink>
                    </IconGrid>
                </motion.div>
        </>
    )
}

export default JavascriptIcons