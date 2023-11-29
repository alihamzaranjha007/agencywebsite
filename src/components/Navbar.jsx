import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [nav,setNav] = useState(true)

    const handleNav = ()=>{
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-10 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>AGENCY</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Home</li>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Company</li>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Resources</li>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer'>About</li>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-gray-900 ease-in-out duration-500' : "fixed left-[-100%]"}>
            <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>AGENCY</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>Home</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>Company</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>Resources</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>About</li>
                    <li className='p-4 hover:text-[#00df9a]'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar