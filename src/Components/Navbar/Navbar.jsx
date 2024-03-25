import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SlClose } from "react-icons/sl";
import { AnimatePresence, motion } from 'framer-motion';
import { Slant as Hamburger } from 'hamburger-react'

const navData = [
    { title: "{ Home }", path: '/' },
    { title: "{ Contact }", path: '/contact' },
]


function Navbar() {

    const [open, setOpen] = useState(false);

    useEffect(()=>{
        const body = document.querySelector('body');

        if (open) {
            body.classList.add('overflow-hidden', 'min-h-screen');
        } else {
            body.classList.remove('overflow-hidden', 'min-h-screen');
        }

        return () => {
            body.classList.remove('overflow-hidden', 'min-h-screen');
        };
    },[open])

    const toggleNavbar = () => {
        setOpen((prevOpen) => !prevOpen)
    }


    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
                staggerChildren: 0.39,
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.39,
                duration: 0.5,
                ease: [0.33, 1, 0.40, 1],
            },
        }

    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection:-1,
            }
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection:1,
            }
        }
    };

    const closeBtn = {
        rest: { scale: 1, opacity: 0.5 },
        hover: { scale: 1.1, opacity: 1 },
        pressed: { scale: 0.95 }
    }

    return (

        <div className='fixed top-0 left-0 flex flex-row z-20'>

            <div className={`fixed z-60 top-5 right-20 text-4xl $ text-[#F2E9E4] cursor-pointer`} style={{ zIndex: 60 }}>
                <Hamburger toggled={open} toggle={setOpen} size={40} />
            </div>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed top-0 left-0 w-full h-full bg-[#101010] bg-opacity-60"
                            onClick={toggleNavbar}
                        />
                        <motion.div variants={menuVars} initial="initial" animate="animate" exit="exit" className={`w-[100vw] h-[100vh] origin-top overflow-hidden z-20 ${open ? "bg-[#C9ADA7]" : ""}`}>

                            <motion.div variants={menuVars} initial="initial" animate="animate" exit="exit" className='bg-[#101010] w-[100vw] h-[100vh] origin-top flex items-center overflow-hidden justify-center text-center'>

                                <div
                                    variants={containerVars}
                                    initial="initial"
                                    animate="open"
                                    className={`text-6xl`}>
                                    {navData.map((nav, index) => (
                                        <div key={index} className="overflow-hidden ">
                                            <NavRender uniqueKey={index} title={nav.title} href={nav.path} toggleNavbar={toggleNavbar}/>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar

const navLink = {
    initial: {
        y: "200vh",
        transition: {
            duration: 0.7,
            ease: [0.37, 0, 0.63, 1],
            staggerDirection: 1,
        },
    },
    animate: {
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
            staggerDirection: -1,
        },
    },
    exit: {
        y: "200vh",
        transition: {
            ease: [0.37, 0, 0.63, 1],
            duration: 0.9,
            staggerDirection: -1, // Stagger from bottom to top on exit
        },
    },

}



const NavRender = ({ uniqueKey, title, href,toggleNavbar }) => {
    const handleClick = () => {
        toggleNavbar()
    };

    return (
        <motion.div
            key={uniqueKey}
            variants={navLink}
            initial="initial"
            animate="animate"
            exit="exit"

            className='flex flex-col gap-y-16'>
            <NavLink to={href} onClick={handleClick} className={({ isActive }) =>
                `${isActive ? "text-[#F2E9E4]" : "text-[#4A4E69]"}  hover:bg-gray-50 hover:bg-transparent lg:border-0 hover:text-[#F2E9E4] lg:p-6 cursor-pointer`
            }>
                {title}

            </NavLink>
        </motion.div>

    )
}