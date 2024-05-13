'use client'
import React,{ useEffect } from 'react'
import { useScroll, motion, useMotionValueEvent } from "framer-motion"
import './styles.css'

const ScrollBar = () => {

    const { scrollYProgress, scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    useEffect(() => {
        console.log("Scroll progress: ", scrollYProgress)
    }, [scrollYProgress]);
    return (
        <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
    )
}

export default ScrollBar