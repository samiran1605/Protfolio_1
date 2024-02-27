import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className='flex flex-row'>
            <nav className='fixed top-10 left-5 z-10'>
                <div className='gap-y-16 flex flex-col text-4xl'>
                    <NavLink to='/' className={({ isActive }) =>
                        `${isActive ? "text-[#F2E9E4]" : "text-[#4A4E69]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F2E9E4] lg:p-0`
                    }>
                        {'{Home}'}
                    </NavLink>
                    <div className="w-full h-px bg-white"></div>
                    <NavLink to='service' className={({ isActive }) =>
                            `${isActive ? "text-[#F2E9E4]" : "text-[#4A4E69]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F2E9E4] lg:p-0`
                        }>
                        {"{Service}"}
                    </NavLink>
                    <div className="w-full h-px bg-white"></div>
                    <NavLink to='project' className={({ isActive }) =>
                        `${isActive ? "text-[#F2E9E4]" : "text-[#4A4E69]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F2E9E4] lg:p-0`
                    }>
                        {'{Projects}'}
                    </NavLink>
                    <div className="w-full h-px bg-white"></div>
                    <NavLink to='contact' className={({ isActive }) =>
                        `${isActive ? "text-[#F2E9E4]" : "text-[#4A4E69]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#F2E9E4] lg:p-0`
                    }>
                        {"{Contact}"}
                    </NavLink>
                    <div className="w-full h-px bg-white"></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar