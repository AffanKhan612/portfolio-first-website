import React from 'react'

const About = () => {
  return (
    <div>
      <div className='mt-22 p-14 flex'>
        <div className='w-full'>
          <span className='text-[#00ff87] text-sm tracking-wider'>00 — ABOUT</span>
          <div className='mt-5'>
            <div className='relative'>
              <img className='w-1/2 h-85 object-cover border border-[#6b6b6b]' src="./public/Me.png" alt="" />
              <div className='absolute inset-0 backgroundgradient'></div>
            </div>
          </div>
        </div>
        <div className='w-full' >
          <div className='text-6xl w-full [word-spacing:8px] tracking-wider mb-8'>Crafting digital <span className='text-[#00ff87]'>experiences</span> that last.</div>
          <div className='text-lg text-[#6b6b6b] flex flex-col w-1/2 gap-y-4'>
            <div className=''>I'm a full-stack developer and Computer Science student passionate about building modern web experiences that combine clean design with powerful functionality.</div>

            <div>I work with technologies like React, Tailwind CSS, Node.js, Express, MongoDB, and TypeScript, and I'm currently expanding my skills into Next.js and modern full-stack development. I enjoy turning ideas into responsive, practical applications while continuously improving my problem-solving and engineering skills.</div>

            <div>When I'm not building projects, I'm learning new technologies, exploring the future of AI-powered applications, and strengthening my foundation in Data Structures and Algorithms.</div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
