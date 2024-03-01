import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

function Navbar() {

    const [isOpen, setIsOpen] = useState(true);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='flex flex-row'>
            <nav className={`fixed top-10 left-5 z-10 text-4xl transition-all duration-500 ${isOpen ? 'w-64' : 'w-16 ease-linear collapse'}`}>
                <div className='gap-y-16 flex flex-col'>
                    <NavLink to='/' className={({ isActive }) =>
                        `${isActive ? "text-[#F2E9E4]" : "text-[#4A4E69]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F2E9E4] lg:p-0`
                    }>
                        {'{Home}'}
                    </NavLink>
                    <div className="h-px bg-white"></div>
                    <NavLink to='service' className={({ isActive }) =>
                            `${isActive ? "text-[#F2E9E4]" : "text-[#4A4E69]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F2E9E4] lg:p-0`
                        }>
                        {"{Service}"}
                    </NavLink>
                    <div className="h-px bg-white"></div>
                    <NavLink to='project' className={({ isActive }) =>
                        `${isActive ? "text-[#F2E9E4]" : "text-[#4A4E69]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F2E9E4] lg:p-0`
                    }>
                        {'{Projects}'}
                    </NavLink>
                    <div className="h-px bg-white"></div>
                    <NavLink to='contact' className={({ isActive }) =>
                        `${isActive ? "text-[#F2E9E4]" : "text-[#4A4E69]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F2E9E4] lg:p-0`
                    }>
                        {"{Contact}"}
                    </NavLink>
                    <div className="w-full h-px bg-white"></div>
                </div>
            </nav>
            <div className={`fixed transition-all duration-500 ${isOpen?"top-80 left-72": "top-80 left-16"  } z-20 text-[#F2E9E4] cursor-pointer`} onClick={toggleNavbar}>
                {isOpen ? <FaAngleLeft size={32} /> : <FaAngleRight size={32} />}
            </div>
        </header>
    )
}

export default Navbar