import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const Projects = () => {
  return (
    <div>
    <div className='p-14 mt-22'>
      <div className='text-[#00ff87] text-sm tracking-wider'>02 — WORK</div>
      <h1 className='text-4xl mt-4'>PROJECTS MADE</h1>
      <div className='border border-gray-600 p-8 mt-16 hover:bg-[#ffffff27] hover:text-[#00ff87]'>
        <div className='flex justify-around items-center text-[#6b6b6b] hover:font-bold '> <span className='text-sm'>01</span> <span className='text-xl tracking-wider font-medium text-white'>Netflix-UI-Clone</span> <span className='text-[#6b6b6b] text-sm font-normal'>2026</span> <MdArrowRightAlt className='' /> </div>
      </div>
      </div>
      <div className='bg-gray-600 w-full h-px mt-15'></div>
      </div>
  )
}

export default Projects
