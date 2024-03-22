import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
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



function TitleIntro() {

    const scrollRef = useRef(null)
    const ghostRef = useRef(null)
    const [scrollRange, setScrollRange] = useState(0)
    const [viewportW, setViewportW] = useState(0)

    // if(scrollRef.current){
    //     console.log(scrollRef.current.scrollWidth)
    // }

    // if(ghostRef.current){
    //     console.log(ghostRef.current)
    // }

    // console.log(-scrollRange + viewportW)

    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth)
    }, [scrollRef])

    const onResize = useCallback(entries => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width)
            console.log(entry.target)
        }
        
    }, [])

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(entries => onResize(entries))
        resizeObserver.observe(ghostRef.current)
        return () => resizeObserver.disconnect()
    }, [onResize])

    const { scrollYProgress } = useScroll()
    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollRange*1.47]
    )
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }
    const spring = useSpring(transform, physics)
    // console.log(spring)

    return (
        <>
            <div className="fixed left-0 right-0 top-0 bottom-0 will-change-transform overflow-hidden -z-10">
                <motion.div ref={scrollRef} style={{x: spring}} className='relative gap-4 h-[100vh] w-max flex  items-center px-8'>
                    {titles.map((title, index) => (
                        <div key={index} className='relative'>
                            <div className="p-2 rounded border-2 flex items-center justify-end gap-3">
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
                                <p className='text-center text-lg text-[#C9ADA7] p-16'>{title.para}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div ref={ghostRef} style={{ height: scrollRange }} className="w-[50vh]" />
        </>
    )
}

export default TitleIntro