import React, { useEffect, useState } from 'react'
import ImageContainer from './ImageContainer'
import TitleIntro from './TitleIntro'
import Button from '../Button/Button'
import { TypeAnimation } from 'react-type-animation';
import VideoContainer from './VideoContainer';



function Home() {

  const [offsetTop, setOffsetTop] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setOffsetTop(document.querySelector('.TopOffSet').getBoundingClientRect().top + window.scrollY);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

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

  return (
    <div className="p-4 TopOffSet">
      <h1 className='gap-3 text-[#C9ADA7]'>

        {showAnimation && (
          <TypeAnimation
            sequence={animationSequence}
            wrapper="span"
            speed={10}
            style={{
              fontSize: '6em',
              display: 'inline-block',
              position: 'absolute',
              top: '5px', // Adjust this value as needed
              left: '20px', // Adjust this value as needed
              zIndex: '-1', // Set a lower z-index to keep it behind other content
              opacity: '0.3', // Adjust the opacity as needed
              pointerEvents: 'none',
            }}
            repeat={Infinity}
            erase={true}
          />
        )}

      </h1>

      <div className='top-5 text-[#C9ADA7]'>

        <div className="">
          <TitleIntro getOffsetTop={()=> offsetTop} />
        </div>

        <div className="border-2 mb-2">
          <h1 className='text-9xl text-[#4A4E69] w-max p-8'>Work</h1>
        </div>

        <div className="">
          <div className="border-2">
            <h1 className='text-4xl text-[#4A4E69] w-max p-8'>Graphics Design</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ImageContainer  />
          </div>
        </div>
        <div className="">
          <div className="border-2">
            <h1 className='text-4xl text-[#4A4E69] w-max p-8'>Video Editing</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <VideoContainer />
          </div>
        </div>




        <div className="text-center mb-8">
          <Button linkto="contact" />
        </div>

      </div>
    </div >
  )
}

export default Home