import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player'

const paraData = [
    {
        content: "Jaggery making",

    },
    {
        content: "StudioVity Intro",

    },
    {
        content: "StudioVity Intro 2",

    },
    {
        content: "Studiovity Notes",

    },
    {
        content: "StudioVity : Beat Board",

    },

]

const videoUrls = [
    {
        Urls: "https://youtu.be/qBCUefeLY4k"
    },
    {
        Urls: "https://youtu.be/r06D_DYPXpI"
    },
    {
        Urls: "https://youtu.be/M1M6qqsIr5Y"
    },
    {
        Urls: "https://youtu.be/1eRG2DOsMLE"
    },
    {
        Urls: "https://youtu.be/TV5daWAHElY"
    }

]

function VideoContainer() {


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
                <div className="flex flex-col h-[640px] items-start justify-evenly border-2 border-dashed p-16">
                    {paraData.map((para, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className="m-8 text-2xl cursor-pointer ">
                            <p>{para.content}</p>
                        </div>
                    ))}
                </div>

                <motion.div className="flex items-center" animate={{ opacity: hoveredIndex !== null ? 1 : 0 }} transition={{ duration: 0.5 }}>
                    {hoveredIndex !== null && (
                        <>
                            <ReactPlayer url={videoUrls[hoveredIndex].Urls} playing={true} width="640px" height="360px" volume={0.5} />
                        </>
                    )}
                </motion.div>

            </div>
        </>
    )
}

export default VideoContainer