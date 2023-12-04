import React from 'react'
import ReactTyped from 'react-typed'

const Hero = () => {
    return (
        <div className='text-white' id='home'>
            <div className="mx-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-auto">
                <p className='text-[#00df9a] font-bold p-2'>GROWING WEB DEVELOPER</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>GROW WITH WEBSITE</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl font-bold'>Looking for </p>
                    <ReactTyped
                        className='md:text-5xl sm:text-4xl font-bold pl-2 text-[#00df9a]'
                        strings={['Web Developer', 'UI/UX Designer', 'Youtuber']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop />
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-0 mx-auto mt-10 py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero