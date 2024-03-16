import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SlClose } from "react-icons/sl";
import { AnimatePresence, motion } from 'framer-motion';
import Hamburger from 'hamburger-react'

const navData = [
    { title: "{ Home }", path: '/' },
    { title: "{ Service }", path: '/service' },
    { title: "{ Projects }", path: '/project' },
    { title: "{ Contact }", path: '/contact' },
]


function Navbar() {

    const [open, setOpen] = useState(false);

    const toggleNavbar = () => {
        const body = document.querySelector('body');
        if (!open) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
        setOpen((prevOpen) => !prevOpen)
    }

    const menuVars = {
        initial: {
            scaleY: 0,
            scaleX: 0,

            borderLeftRadius: "100%",
            borderBottomLeftRadius: "100%",
            opacity: 0,
        },
        animate: {
            scaleY: [0, 1],
            scaleX: [0, 1],

            borderLeftRadius: ["100%", "100%", "100%", "50%"],
            borderBottomLeftRadius: ["100%", "100%", "100%", "50%"],
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
                staggerChildren: 0.09,
            },
        },
        exit: {
            scaleY: 0,
            scaleX: 0,

            borderLeftRadius: "100%",
            borderBottomLeftRadius: "100%",
            transition: {
                delay: 0.3,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        }

    };

    const containerVars = {
        initial: {
            transition: {

                staggerChildren: 0.09,
            }
        },
        open: {
            transition: {
                staggerChildren: 0.09,
            }
        }
    };

    const closeBtn = {
        rest: { scale: 1, opacity: 0.5 },
        hover: { scale: 1.1, opacity: 1 },
        pressed: { scale: 0.95 }
    }

    return (
        <div className='fixed top-0 left-0 w-full h-[100vh] flex flex-row'>

            <div className={`fixed right-20 z-60 top-5 text-4xl $ text-[#F2E9E4] cursor-pointer`} >
                <Hamburger onToggle={toggleNavbar} size={40} />
            </div>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 overflow-hidden"
                            onClick={toggleNavbar}
                        />
                        <motion.div variants={menuVars} initial="initial" animate="animate" exit="exit" className={`w-[100vw] h-[100vh] origin-top-right overflow-hidden z-50 ${open ? "bg-[#C9ADA7]" : ""}`} style={{ borderRadius: "50%" }}>

                            <motion.div variants={menuVars} initial="initial" animate="animate" exit="exit" className='bg-[#101010] w-[100vw] h-[100vh] origin-top-right flex items-center overflow-hidden justify-center text-center' style={{ borderRadius: "50%" }}>

                                <div
                                    variants={containerVars}
                                    initial="initial"
                                    animate="open"
                                    className={`text-6xl`}>
                                    {navData.map((nav, index) => (
                                        <div key={index} className="overflow-hidden">
                                            <NavRender uniqueKey={index} title={nav.title} href={nav.path} />
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
            duration: 1,
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



const NavRender = ({ uniqueKey, title, href }) => {
    const handleClick = (e) => {
        toggleNavbar();
        setTimeout(() => {
            window.location.href = href; 
        }, 500);
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