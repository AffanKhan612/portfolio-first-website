import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div>
      <div className='mt-22 p-14 flex'>
        <div className='w-1/2'>
          <span className='text-[#00ff87] text-sm tracking-wider'>00 — ABOUT</span>
          <div className='mt-5'>
            <div className='relative'>
              <img className='w-2/3 h-85 object-cover border border-[#6b6b6b]' src="/Me.png" alt="" />
              <div className='absolute inset-0 backgroundgradient'></div>
            </div>
          </div>
        </div>
        <div className='w-full' >
          <div className='text-6xl w-2/3 [word-spacing:8px] tracking-wider mb-8'>Crafting digital <span className='text-[#00ff87]'>experiences</span> that last.</div>
          <div className='text-lg text-[#a7a1a1] flex flex-col w-full gap-y-4'>
            <div className=''>I'm a full-stack developer and Computer Science student passionate about building modern web applications with clean design and practical functionality.</div>

            <div>I work with technologies like React, Tailwind CSS, Node.js, Express, and MongoDB, and enjoy turning ideas into responsive and user-friendly applications.</div>

            <div>When I'm not building projects, I'm learning new technologies and improving my problem-solving skills.</div>
          </div>
          <div className='flex gap-x-4 text-[#6b6b6b] mt-8 tracking-wider text-sm'>
            <a className='underline flex items-center gap-x-2' href="https://github.com/AffanKhan612">GITHUB <MdArrowOutward /></a>
            <a className='underline flex items-center gap-x-2' href="https://www.linkedin.com/in/md-affan-ali-khan-a25749409/">LINKEDIN <MdArrowOutward /></a>
            <a className='underline flex items-center gap-x-2' href="/Resume.html">RESUME <MdArrowOutward /></a>
          </div>
        </div>
      </div>
      <div className='bg-gray-600 w-full h-px mt-16'></div>
    </div>

  )
}

export default About
