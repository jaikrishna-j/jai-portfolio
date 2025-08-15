import React from 'react'
import { motion } from 'framer-motion' 

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "84d7f2c3-5558-4c6a-a757-a41d4ec63fe5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Form has been Submitted Successfully");
            event.target.reset();
        } else {
            alert("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1 
            whileInView={{y:0 , opacity:1}}
            initial={{y:-100 , opacity:0}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Get in Touch</motion.h1>
            <motion.form 
            whileInView={{x:0 , opacity:1}}
            initial={{x:100 , opacity:0}}
            transition={{duration:0.5}}
            onSubmit={onSubmit} className="lg:mx-20 my-20 flex flex-col items-start justify-center gap-4">
                <label className='my-1' htmlFor="">Your Name:</label>
                <input className='mb-4 p-3 bg-neutral-900 rounded-2xl w-70 lg:w-xl md:w-xl' type="text" placeholder='Enter Your Name' name='name' required />
                <label className='my-1' htmlFor="">Your Email:</label>
                <input className='mb-4 p-3 bg-neutral-900 rounded-2xl w-70 lg:w-xl md:w-xl' type="email" placeholder='Enter Your Email' name='email' required />
                <label className='my-1' htmlFor="">Write your message here</label>
                <textarea className='mb-4 p-3 bg-neutral-900 rounded-2xl w-70 md:w-xl' name="message" rows="8" placeholder='Enter Your Message' required></textarea>
                <div className="relative inline-flex  group">
                    <div
                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <button href="#" title="Get quote now"
                        className="ml-2 relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white transition-all duration-200 bg-neutral-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button">Submit
                    </button>
                </div>
            </motion.form>
        </div>
    )
}

export default Contact