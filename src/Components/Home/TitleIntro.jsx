import React from 'react'
import { motion } from "framer-motion"
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";
import { VscChromeMinimize } from "react-icons/vsc";

function TitleIntro({ MegaTitle, subtitle, para }) {
    return (
        <>
            <div className="flex flex-col m-32 rounded-md border-2 p-2 gap-2 ">
                <div className="p-4 rounded border-2 flex items-center justify-end space-x-3">
                    <VscChromeMinimize size={24} color='#F2E9E4' />
                    <FaRegWindowRestore size={16} color='#F2E9E4' />
                    <FaRegWindowClose size={24} color='#F2E9E4' />
                </div>
                <div className="border-2">
                <div className="relative  ">
                    <h1 className='text-[#4A4E69] text-9xl text-center'>{MegaTitle}</h1>
                    <h2 className='text-center text-5xl text-[#F2E9E4] absolute py-3 bottom-0 inset-x-0'>
                        {subtitle}</h2>
                </div>
                <p className='text-center text-lg text-[#C9ADA7] p-16'>{para}</p>
                </div>
            </div>

        </>
    )
}

export default TitleIntro