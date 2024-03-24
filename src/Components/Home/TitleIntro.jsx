import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useTransform, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";
import { VscChromeMinimize } from "react-icons/vsc";
import ResizeObserver from 'resize-observer-polyfill';


const titles = [
    { MegaTitle: "INTRO", subtitle: "Web Design and development", para: "love crafting websites that not only look amazing but also work seamlessly. Let's team up to make your online vision a reality!" },
    { MegaTitle: "DESIGN", subtitle: "Specially tailored to your brand", para: "Crafting designs that uniquely reflect your brand's essence, tailored to resonate with your audience." },
    { MegaTitle: "TIME", subtitle: "We value your time as much you do!", para: "Respecting your time is at the core of our service, ensuring every moment is spent on delivering excellence for you." }
];



function TitleIntro({ getOffsetTop }) {

    const scrollRef = useRef(null)
    const offsetTop = getOffsetTop();



    useEffect(() => {
        const handleScroll = () => {
            let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
            percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;
            if (scrollRef.current && window.scrollY >= scrollRef.current.offsetTop) {
                scrollRef.current.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [offsetTop, scrollRef])




    return (
        <>
            <div className="w-full h-full">
                <div style={{}} className='gap-4 h-[300vh]'>
                    <div className="sticky top-0 h-[100vh] overflow-hidden">
                        <div ref={scrollRef} className="absolute top-0 h-[100%] w-[300vw] will-change-transform flex justify-between items-center px-[10vw]">
                            {titles.map((title, index) => (
                                <div key={index} className='relative w-[80vw] overflow-hidden'>
                                    <div className="p-4 rounded border-2 flex items-center justify-end gap-3">
                                        <div className="flex items-center justify-center transition ease-in-out delay-150 hover:scale-110 duration-200 hover:opacity-60">
                                            <VscChromeMinimize size={24} color='#F2E9E4' />
                                        </div>
                                        <div className="flex items-center justify-center transition ease-in-out delay-150 hover:scale-110 duration-200 hover:opacity-40">
                                            <FaRegWindowRestore size={16} color='#F2E9E4' />
                                        </div>
                                        <div className="flex items-center justify-center transition ease-in-out delay-150 hover:scale-110 duration-200 hover:opacity-60">
                                            <FaRegWindowClose size={24} color='#F2E9E4' />
                                        </div>
                                    </div>
                                    <div className="border-2 divide-y">
                                        <div className="relative">
                                            <h1 className='text-[#4A4E69] text-9xl text-center'>{title.MegaTitle}</h1>
                                            <h2 className='text-center text-5xl text-[#F2E9E4] absolute py-3 bottom-0 inset-x-0'>
                                                {title.subtitle}</h2>
                                        </div>
                                        <p className='text-center text-lg text-[#C9ADA7] p-8 h-[20vh]'>{title.para}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TitleIntro


