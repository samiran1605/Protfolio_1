import React, { useEffect, useState } from 'react'

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

  const [hoverImg, setHoverImg] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };



  return (
    <>
      <div className="flex flex-row gap-8 p-8 ">
        <div className="flex flex-col items-start border-2 p-16">
          <h2 className='text-4xl text-[#F2E9E4] py-2'>Development</h2>
          {paraData.map((para, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className=" cursor-pointer">
              <p>{para.content}</p>
            </div>
          ))}
        </div>

        <div className="">
          {hoveredIndex !== null && (
            <>
              <img className={`rounded object-contain h-[50vh] w-[40vw] transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105 `} src={imageData[hoveredIndex].imageUrl} alt='dev image' />
            </>
          )}
        </div>


      </div>
    </>
  )
}

export default ImageContainer