import { transform } from 'framer-motion'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useEffect, useRef } from 'react'


function App() {

  const cursorDot = useRef(null)
  const cursorOutline = useRef(null)

  useEffect(() => {

    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      if (cursorDot.current && cursorOutline.current) {
        cursorDot.current.style.left = `${posX}px`;
        cursorDot.current.style.top = `${posY}px`;

        // cursorOutline.current.style.left = `${posX}px`;
        // cursorOutline.current.style.top = `${posY}px`;
        cursorOutline.current.animate({
          left: `${posX}px`,
          top: `${posY}px`,
          mixBlendMode: 'difference',
        }, { duration: 1000, fill: "forwards" });

      }
      return () => {
        window.removeEventListener('mousemove');
      };
    },[])

  }, [])

  return (
    <>
      <div ref={cursorDot} className="fixed top-0 left-0 w-1 h-1 border-2 rounded-lg z-10 pointer-events-none" style={{ transform: "translate(-50%, -50%)" }}></div>
      <div ref={cursorOutline} className="fixed bg-[#9A8C98] border-[#F2E9E4] top-0 left-0 w-20 h-20 border-2 rounded-lg z-10 pointer-events-none" style={{ transform: "translate(-50%, -50%)" }}></div>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
