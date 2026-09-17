import React from 'react'

const Skills = () => {
    return (
        <div>
            <div className=' mt-22 p-14'>
                <div className='text-[#00ff87] text-sm tracking-wider'>01 — SKILLS</div>
                <h1 className='text-5xl mt-5'>Tools & Technologies</h1>
                <div className='border border-gray-500 mt-20 p-10 flex justify-around'>
                    <div>
                        <div className='text-[#00ff87] text-sm'>FRONTEND</div>
                        <ul>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                React
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                Tailwind CSS
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='text-[#00ff87] text-sm'>BACKEND</div>
                        <ul>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                Node.js
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                Express.js
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                REST APIs
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                MongoDB
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='text-[#00ff87] text-sm'>DESIGN</div>
                        <ul>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                Figma
                            </li>
                        </ul>
                    </div>
                     <div>
                        <div className='text-[#00ff87] text-sm'>DEVOPS</div>
                        <ul>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                Vercel
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                Git
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span className="w-1 h-1 bg-[#6b6b6b] rounded-full"></span>
                                Git Hub
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-gray-600 w-full h-px mt-16'></div>
        </div>
    )
}

export default Skills
