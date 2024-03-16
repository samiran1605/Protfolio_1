import React from 'react'
import { motion } from "framer-motion"

function TitleIntro({ MegaTitle, subtitle, para }) {
    return (
        <>
            <div className="mb-24">
                <div className="relative">
                    <motion.h1 animate={{ fontSize: '128px', textAlign: 'center' }} className='text-[#4A4E69]'>{MegaTitle}</motion.h1>
                    <h2 className='text-center text-5xl text-[#F2E9E4] absolute py-3 bottom-6 inset-x-0'>
                        {subtitle}</h2>
                </div>
                <p className='text-center text-lg text-[#C9ADA7]'>{para}</p>
            </div>
            <div className="text-center mb-16">-----------------------------------------------------------</div>
        </>
    )
}

export default TitleIntro