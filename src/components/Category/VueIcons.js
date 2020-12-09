import React from 'react'
import { motion } from "framer-motion";
import {MotionImage, IconGrid, Icon, IconLink} from './style'

const pageTransition = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0.3
    }
}

function VueIcons() {
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
                <div>
                    <IconGrid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="baseline">
                    <IconLink to="/reactjs"><Icon to="/reactjs" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="React" src="https://i.ibb.co/5vVZS3n/react.webp" /></Icon></IconLink>
                    <IconLink to="/rails"><Icon to="/rails" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="Ruby on Rails" src="https://i.ibb.co/x1v8PBP/ruby.webp" /></Icon></IconLink>
                    <IconLink to="/javascript"><Icon to="/javascript" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="JavaScript" src="https://i.ibb.co/wRjQj2t/JS.webp"/></Icon></IconLink>
                    <IconLink to="/angular"><Icon to="/angular" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="AngularJS" src="https://i.ibb.co/MPG2MJr/angular.webp" /></Icon></IconLink>
                    <Icon>
                    <MotionImage
                        src="https://i.ibb.co/CBV6QkC/vue.webp"
                        alt='VueJS'
                        width="200px"
                        height="200px"
                        initial={{ scale: 1, opacity: 0.3 }}
                        animate={{
                            transition: { delay: 0.2, ...transition },
                            scale: 2,
                            opacity: 1
                        }}
                        exit={{scale: 1, transition: transition, opacity: 0.3}}
                        />
                    </Icon>
                    <IconLink to="/html5"><Icon to="/html5" className="extra"><motion.img whileHover={{ scale: 1.1 }} transition={transition} initial="out" animate="out" exit="out" variants={pageTransition} alt="HTML5" src="https://i.ibb.co/myrrbFx/html.webp" /></Icon></IconLink>
                    </IconGrid>
                    </div>
                </motion.div>
        </>
    )
}

export default VueIcons