import React, { useState } from 'react'
import ImageContainer from './ImageContainer'
import TitleIntro from './TitleIntro'
import Button from '../Button/Button'
import { TypeAnimation } from 'react-type-animation';
import VideoContainer from './VideoContainer';


const titles = [
  { MegaTitle: "INTRO", subtitle: "Web Design and development", para: "love crafting websites that not only look amazing but also work seamlessly. Let's team up to make your online vision a reality!" },
  { MegaTitle: "DESIGN", subtitle: "Specially tailored to your brand", para: "Crafting designs that uniquely reflect your brand's essence, tailored to resonate with your audience." },
  { MegaTitle: "TIME", subtitle: "We value your time as much you do!", para: "Respecting your time is at the core of our service, ensuring every moment is spent on delivering excellence for you." }
];





function Home() {

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
    <div className="relative -z-20">
      <h1 className='gap-3 text-[#C9ADA7] inline-block'>

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

      <div className='absolute scroll-smooth top-5 p-4 text-[#C9ADA7] m-2'>

        {titles.map((title, index) => (
          <TitleIntro key={index} MegaTitle={title.MegaTitle} subtitle={title.subtitle} para={title.para} />
        ))}

        <div className="border-2 m-8">
          <h1 className='text-9xl text-[#4A4E69] w-max p-8'>Work</h1>
        </div>

        <div className="">
          <div className="border-2  m-8">
          <h1 className='text-4xl text-[#4A4E69] w-max p-8'>Graphics Design</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
          <ImageContainer />
          </div>
        </div>
        <div className="">
          <div className="border-2  m-8">
          <h1 className='text-4xl text-[#4A4E69] w-max p-8'>Video Editing</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
          <VideoContainer/>
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