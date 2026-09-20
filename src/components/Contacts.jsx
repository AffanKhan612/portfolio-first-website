import React, { useState } from 'react'
import { GiCheckMark } from "react-icons/gi";

const Contacts = () => {

  const [recieve, setrecieve] = useState(false)

  const handleMessageSent = () => {
    if(recieve == false){
      setrecieve(true)
    }
  }
  

  return (
    <div>
      <div className='p-14 mt-22 flex'>
        <div className='flex flex-col gap-y-6 w-1/2'>
        <div className='text-[#00ff87]'>03 — CONTACT</div>
        <h1 className='text-5xl w-1/2'>Let's build something together.</h1>
        <div className='text-lg text-[#6b6b6b] w-1/2'>I'm currently available for freelance projects, advisory roles, and full-time positions. Drop me a line — I respond within 24 hours.</div>
        <div>
            <div className='flex gap-x-12'><span className='text-[#2a2a2a]'>EMAIL</span> <span className='text-[#9a9a9a]'>khanmdaffanali@gmail.com</span></div>
            <div className='flex gap-x-12'><span className='text-[#2a2a2a]'>LOCATION</span> <span className='text-[#9a9a9a]'>Kolkata, WB</span></div>
            <div className='flex gap-x-12'><span className='text-[#2a2a2a]'>TIMEZONE</span> <span className='text-[#9a9a9a]'>PST (UTC-8)</span></div>
        </div>
        </div>
        <div className='w-1/2'>
        <div className='border border-[#2a2a2a] p-4 flex flex-col text-sm'  >
          <div style={{display: recieve ? "none" : "block"}}>
          <div>
            <div className='text-[#2a2a2a]'>YOUR NAME</div> <input className='outline-none w-full' type="text" placeholder='Jane Smith' />
          </div>
          <div className='bg-[#2a2a2a] w-full h-px my-4'></div>
          <div>
            <div className='text-[#2a2a2a]'>EMAIL ADDRESS</div> <input className='outline-none w-full' type="text" placeholder='Jane@example.com' />
          </div>
          <div className='bg-[#2a2a2a] w-full h-px my-4'></div>
          <div className=''>
            <div className='text-[#2a2a2a]'>MESSAGE</div> <textarea rows={5} className='outline-none w-full' type="text" placeholder='Tell me about your project...' />
          </div>
          <div className='bg-[#2a2a2a] w-full h-px my-4'></div>
          <button className='bg-[#00ff87] p-4 text-black font-semibold w-full' onClick={handleMessageSent}>SEND MESSAGE</button>
        </div>
        <div className='h-88 m-auto' style={{display: recieve ? "block" : "none"}}>
          <div className='text-[#00ff87] text-2xl absolute bottom-82 left-240'><GiCheckMark /></div>
          <div className='mt-44 text-lg text-[#6b6b6b] relative'>Message received. I'll get back to you soon.</div>
        </div>
        </div>
        </div>
      </div>
      <div className='bg-gray-600 w-full h-px mt-15'></div>
    </div>
  )
}

export default Contacts
