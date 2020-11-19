import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {MotionImage, IconGrid, Icon} from './style'

export default function Javascript({imageSize}) {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
    return (
        <>
        <motion.div
        onAnimationComplete={console.log(imageSize)}
        initial='initial'
        animate='animate'
        exit='exit'>
                <motion.div
                // initial={{
                //     y: "15%",
                //     width: imageSize.width,
                //     height: imageSize.height,
                // }}
                // animate={{
                //     y: 0,
                //     width: "100%",
                //     height: window.innerWidth > 1440 ? 800 : 400,
                //     transition: { delay: 0.2, ...transition },
                // }}
                >
                <motion.div
                    className='frame-single'
                    transition={transition}>
                    <IconGrid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="baseline">
                    <Icon className="extra"><motion.img transition={transition} initial={{opacity: 1}} animate={{opacity: 0}} alt="ReactJS" src="https://png2.cleanpng.com/sh/a9ae3b5b8626a46af7be3724fa57d4b1/L0KzQYm3VMA2N6Z7j5H0aYP2gLBuTfdidZYyitdqY4SwfrL7igZmNZtmjtN8Y4LsgMW0gf5lepDufJ95aIn2ebT6TcVia2dpTdgAMUi6SbaBTsY3OmQ5Tqc6MUW1QoqBUMM1OWI1SKU3cH7q/kisspng-game-react-native-javascript-android-physics-5ac6d5f51879e8.6623465115229803411003.png" /></Icon>
                    <Icon className="extra"><motion.img transition={transition} initial={{opacity: 1}} animate={{opacity: 0}} alt="Ruby on Rails" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png" /></Icon>
                    <Icon>
                    <MotionImage
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
                        alt='JavaScript'
                        style={{ scale: scale }}
                        width={imageSize.width}
                        height={imageSize.height}
                        initial={{ scale: 1.1 }}
                        // animate={{
                        //     transition: { delay: 0.2, ...transition },
                        //     y: window.innerWidth > 1440 ? -1200 : -600,
                        // }}
                        />
                    </Icon>
                    <Icon className="extra"><motion.img transition={transition} initial={{ opacity: 1 }} animate={{opacity: 0}} alt="AngularJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png" /></Icon>
                    <Icon className="extra"><motion.img transition={transition} initial={{ opacity: 1 }} animate={{opacity: 0}} alt="VueJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/200px-Vue.js_Logo_2.svg.png" /></Icon>
                    <Icon className="extra"><motion.img transition={transition} initial={{ opacity: 1 }} animate={{opacity: 0}} alt="HTML5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png" /></Icon>
                    </IconGrid>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}
