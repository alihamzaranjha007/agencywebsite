import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {BrowserRouter} from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

const Navbar = () => {

    const [nav,setNav] = useState(true)

    const handleNav = ()=>{
        setNav(!nav)
    }
    return (
        <BrowserRouter>
        <div className='bg-black fixed top-0 w-[100%]'>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-10 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>AGENCY</h1>
            <ul className='hidden md:flex'>
            <Link to="#home" smooth><li className='p-4 hover:text-[#00df9a] cursor-pointer'>Home</li></Link>
                {/* <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Company</li> */}
                <Link to="#about" smooth><li className='p-4 hover:text-[#00df9a] cursor-pointer'>About</li></Link>
                <Link to="#contact" smooth><li className='p-4 hover:text-[#00df9a] cursor-pointer'>Contact</li></Link>
                <Link to="#resouce" smooth><li className='p-4 hover:text-[#00df9a] cursor-pointer'>Resources</li></Link>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-gray-900 ease-in-out duration-500' : "fixed left-[-100%]"}>
            <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>AGENCY</h1>
                <ul className='p-4 uppercase'>
                <Link to="#home" smooth><li onClick={()=>{setNav(!nav)}} className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>Home</li></Link>
                    {/* <li className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>Company</li> */}
                    <Link to="#about" smooth><li onClick={()=>{setNav(!nav)}} className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>About</li></Link>
                    <Link to="#contact" smooth><li onClick={()=>{setNav(!nav)}} className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>Contact</li></Link>
                    <Link to="#resouce" smooth><li onClick={()=>{setNav(!nav)}} className='p-4  hover:text-[#00df9a]'>Resources</li></Link>
                </ul>
            </div>
        </div>
        </div>
        </BrowserRouter>
    )
}

export default Navbar