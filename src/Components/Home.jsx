import React from 'react'
import { HOME_CONTENT } from '../constants'
import profile from '../assets/JaikrishnaProfile.png'
import { motion } from 'framer-motion'

const containerx = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

const containery = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay }
    }
});


const Home = () => {
    return (
        <div className="border-b border-neutral-900 pb-4  lg:mb-35">
            <div className="flex flex-wrap items-center justify-center lg:justify-between">
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={containerx(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Jaikrishna</motion.h1>
                        <motion.span 
                        variants={containerx(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Frontend Developer
                        </motion.span>
                        <motion.p
                        variants={containerx(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HOME_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        variants={containery(1.2)}
                        initial="hidden"
                        animate="visible"
                        className='rounded-3xl w-500px h-500px' src={profile} alt="Jaikrishna Profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home