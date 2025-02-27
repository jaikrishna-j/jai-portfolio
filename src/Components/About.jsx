import React from 'react'
import Picture from '../assets/JaikrishnaPicture.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion' 

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 text-3xl'>
            <motion.h1 
            whileInView={{y:0 , opacity:1}}
            initial={{y:-100 , opacity:0}}
            transition={{duration:1.5}}
            className='my-20 text-center'>
                About
                <span className='text-neutral-500'> Me</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{x:0 , opacity:1}}
                initial={{x:-100 , opacity:0}}
                transition={{duration:0.5}}

                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={Picture} alt="Jaikrishna Picture" className='rounded-3xl' />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{x:0 , opacity:1}}
                initial={{x:100 , opacity:0}}
                transition={{duration:0.5}}


                className="w-full lg:w-1/2 lg:p-8 ">
                    <div className="flex justify-center lg:justify-start ">
                        <p className='my-2 max-w-xl py-6 text-base font-light'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default About