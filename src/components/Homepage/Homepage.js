import React from 'react'
import { motion } from "framer-motion";
import {IconGrid, Icon, HomeWrapper} from './style';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Homepage({reactImage, railsImage, jsImage, angularImage, vueImage, htmlImage}) {
    return (
        <HomeWrapper>
        <IconGrid
        container
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
        >
            <Icon to="/reactjs"><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="ReactJS" src="https://png2.cleanpng.com/sh/a9ae3b5b8626a46af7be3724fa57d4b1/L0KzQYm3VMA2N6Z7j5H0aYP2gLBuTfdidZYyitdqY4SwfrL7igZmNZtmjtN8Y4LsgMW0gf5lepDufJ95aIn2ebT6TcVia2dpTdgAMUi6SbaBTsY3OmQ5Tqc6MUW1QoqBUMM1OWI1SKU3cH7q/kisspng-game-react-native-javascript-android-physics-5ac6d5f51879e8.6623465115229803411003.png"/></Icon>
            <Icon to="/rails" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="Ruby on Rails" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png" /></Icon>
            <Icon to="/javascript" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="JavaScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"/></Icon>
            <Icon to="/angular" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="AngularJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png" /></Icon>
            <Icon to="/vue" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="VueJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/200px-Vue.js_Logo_2.svg.png" /></Icon>
            <Icon to="/html5" ><motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity: 1}} alt="HTML5" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/full/html5.png" /></Icon>
        </IconGrid>
        </HomeWrapper>
    )
}
