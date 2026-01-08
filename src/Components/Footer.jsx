import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion' 

const Footer = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
        whileInView={{y:0 , opacity:1}}
        initial={{y:-100 , opacity:0}}
        transition={{duration:1.5}}
        className="my-10 text-center text-4xl">Contact</motion.h1>
        <motion.div 
        whileInView={{x:0 , opacity:1}}
        initial={{x:-100 , opacity:0}}
        transition={{duration:1.5}}
        className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <a href="#">{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default Footer
