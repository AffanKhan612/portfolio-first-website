import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='mt-15 p-14 tracking-widest flex flex-col gap-y-6'>
        <div className='flex justify-between text-[15px] text-[#6b6b6b]'>
          <div className=''>
            — FULL-STACK DEVELOPER
          </div>
          <div className='relative'>
            <span className='text-[#00ff87] rounded-full mr-2'>●</span>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>
        <h1 className='text-6xl font-medium flex flex-col gap-y-4'><div className='text-[#00ff87]'>MD</div><div>AFFAN</div><div className='text-[#00ff87]'>ALI</div><div>KHAN</div></h1>
        <div className='w-1/2 tracking-normal text-lg text-[#6b6b6b]'>I build modern, responsive web applications with a focus on clean design and seamless user experiences. Currently learning and building projects with the MERN stack and modern web technologies.</div>
        <div className='absolute right-50 bottom-20 flex gap-x-4 tracking-normal'>
          <button className='py-2 px-6 bg-[#00ff87] text-[#080808] transition-transform duration-300 hover:scale-105'>View Work</button>
          <button className='py-2 px-6 border border-gray-500 text-[#6b6b6b]'>Get in Touch</button>
        </div>
      </div>
      <div className='bg-gray-600 mt-15 ml-12 w-[90%] h-px'></div>
      <div className='mt-6 flex justify-around'>
        <div className='flex flex-col'><span className='text-4xl font-semibold text-[#00ff87]'>7+</span> <span className='text-lg text-[#6b6b6b]'>Years Experience</span></div>
        <div className='w-px h-15 bg-gray-600'></div>
        <div className='flex flex-col'><span className='text-4xl font-semibold text-[#00ff87]'>40+</span> <span className='text-lg text-[#6b6b6b]'>Projects Shipped</span></div>
        <div className='w-px h-15 bg-gray-600'></div>
        <div className='flex flex-col'><span className='text-4xl font-semibold text-[#00ff87]'>12</span> <span className='text-lg text-[#6b6b6b]'>Happy Clients</span></div>
        <div className='w-px h-15 bg-gray-600'></div>
        <div className='flex flex-col'><span className='text-4xl font-semibold text-[#00ff87]'>3</span> <span className='text-lg text-[#6b6b6b]'>Open Source Libs</span></div>
        <div className='w-px h-15 bg-gray-600'></div>
        </div>
         <div className='bg-gray-600 w-full h-px mt-15'></div>
    </div>
  )
}

export default Home
