import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

const imageData = [
  {
    imageUrl: "https://media.licdn.com/dms/image/C4D22AQFexWFwfAWqug/feedshare-shrink_1280/0/1672706063522?e=1713398400&v=beta&t=WGwWa8h_ziEa3pLdQe4p2yl4kyyrSXGndS1OfAdSzXE"
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/C4D22AQEP1MXs1TAgMg/feedshare-shrink_800/0/1662899609869?e=1713398400&v=beta&t=zQGMGMVotSMoK6Z4v8So1wt0dpC-NI7cQv5m0x1QebM"
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/C4D22AQFDeolLiQEjWg/feedshare-shrink_1280/0/1661426307172?e=1713398400&v=beta&t=jgQZVuqXfhGQx2IQIupbOGt7_Y833_k3L8jeM1tZhNY"
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/C4D22AQFklcndAWEcJA/feedshare-shrink_800/0/1662118402545?e=1713398400&v=beta&t=lN16MzRM2eph5U1J9pPuwS3FnTNDs3Eh1rdvVLY-w18"
  }

]

const paraData = [
  {
    content: "StudioVity Editing Tool",

  },
  {
    content: "StudioVity Multi-Language",

  },
  {
    content: "Hyperbole in films",

  },
  {
    content: "StudioVity Meet-Up",

  },

]


function ImageContainer({ }) {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerRef = useRef(null)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const handleMouseEnterContainer = () => {
        if (containerRef.current) { // Check if containerRef.current exists
            if (hoveredIndex !== null) {
                setHoveredIndex(null);
            }
        }
    };

    const currentContainerRef = containerRef.current;

    if (currentContainerRef) { // Check if currentContainerRef exists
        currentContainerRef.addEventListener('mouseenter', handleMouseEnterContainer);
    }

    return () => {
        if (currentContainerRef) { // Check if currentContainerRef exists before cleanup
            currentContainerRef.removeEventListener('mouseenter', handleMouseEnterContainer);
        }
    };
}, [hoveredIndex]);

  return (
    <>
      <div ref={containerRef} className="flex flex-row justify-between p-8 w-10/12 ">
        <div className="flex flex-col h-[640px] items-start justify-evenly border-dashed p-4">
          {paraData.map((para, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="m-4 text-4xl cursor-pointer ">
              <p>{para.content}</p>
            </div>
          ))}
        </div>

        <motion.div className="static" animate={{ opacity: hoveredIndex !== null ? 1 : 0 }} transition={{ duration: 0.5 }}>
          {hoveredIndex !== null && (
            <>
              <img className="absolute top-25 right-20 rounded w-2/6 border-2 border-dashed z-20"
                src={imageData[hoveredIndex].imageUrl} alt='dev image' />
            </>
          )}
        </motion.div>


      </div>
    </>
  )
}

export default ImageContainer