import React from 'react'
import logo from '../assets/JaikrishnaLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion' 

const Navbar = () => {
    return (
        <nav className="mb-10 flex items-center justify-between lg:py-4 lg:px-8 ">
            <div className="flex flex-shrink-0 items-center">
               <a href="#contact"> <img className="mx-2 w-12 " src={logo} alt="logo" /></a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href='https://www.linkedin.com/in/jaikrishna-j/' className="cursor-pointer"><FaLinkedin /></a>
                <a href='https://github.com/jaikrishna-j/' className="cursor-pointer"><FaGithub /></a>
                {/* <a href='https://www.facebook.com/' className="cursor-pointer"><FaFacebook /></a> */}
                <a href='https://www.instagram.com/__.xkrishx.__/' className="cursor-pointer"><FaInstagram /></a>
            </div>
        </nav>
    )
}

export default Navbar