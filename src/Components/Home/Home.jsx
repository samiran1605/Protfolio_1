import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ImageContainer from './ImageContainer'
import TitleIntro from './TitleIntro'
import Button from '../Button/Button'
import { TypeAnimation } from 'react-type-animation';
import VideoContainer from './VideoContainer';
import {motion, useScroll, useSpring, useTransform } from 'framer-motion';



function Home() {

  const [offsetTop, setOffsetTop] = useState(0)
  const [scrollRange, setScrollRange] = useState(0)
  const offsetRef = useRef(null)
  const scrollRef = useRef(null)



  useEffect(() => {
    if (offsetRef.current) {
      setOffsetTop(offsetRef.current.parentElement.offsetTop)
    }
  }, [offsetRef.current])

  const [showAnimation, setShowAnimation] = useState(true);

  const animationSequence = [
    `HELLO I AM SAMIRAN`,
    1000,
    'A Web Developer',
    1000, // wait 1s before replacing "Mice" with "Hamsters"
    'UI/UX designer',
    1000,
    'Play with JavaScript',
    1000,
  ];

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollHeight)
  }, [scrollRef])

  const { scrollYProgress } = useScroll()

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange]
  )
  const physics = { damping: 15, mass: 0.57, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <motion.div ref={scrollRef} style={{ scrollYProgress: spring }} className="scroll-smooth">

      <h1 className='gap-3 text-[#C9ADA7] p-8'>
        {showAnimation && (
          <TypeAnimation
            sequence={animationSequence}
            wrapper="span"
            speed={10}
            style={{
              fontSize: 'calc(3vw + 1rem)',
              display: 'inline-block',
              position: 'relative',
              top: '0',
              left: '20px',

              marginBottom: '10vh',
              opacity: '0.3', // Adjust the opacity as needed
              pointerEvents: 'none',
            }}
            repeat={Infinity}
            erase={true}
          />
        )}
      </h1>

      <div className='text-[#C9ADA7] TopOffSet'>
        <div ref={offsetRef} className="title">
          <TitleIntro getOffsetTop={() => offsetTop} />
        </div>

        <div className="border-2 mb-2 mx-8 mt-[10vh]">
          <h1 className='text-9xl text-[#4A4E69] w-max p-8'>Work</h1>
        </div>

        <div className="border-2 mx-8">
          <h1 className='text-4xl text-[#4A4E69] w-max p-8'>Graphics Design</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ImageContainer />
        </div>

        <div className="border-2 mx-8">
          <h1 className='text-4xl text-[#4A4E69] w-max p-8'>Video Editing</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <VideoContainer />
        </div>

        <div className="text-center mb-8">
          <Button linkto="contact" />
        </div>

      </div>
    </motion.div >
  )
}

export default Home