import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact")
  }

    const [isScrolled, setIsScrolled] = useState(false);
    
     const scrollHandler = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        }else{
          setIsScrolled(false);
        }
    }

    return (
        <div>
            <div onScroll={scrollHandler} className='flex justify-between p-5 text-[15px] tracking-widest fixed top-0 left-0 right-0 z-999 border-b-2 border-[#6b6b6b] bg-[#080808] style={{isScrolled ? "bg-[#080808eb] backdrop-blur-md" : "bg-[#080808eb] "}}' >
                <div className='text-[#00ff87] font-bold text-[20px] '>
                    MyPortfolio
                </div>
                <div className='flex gap-20 text-[#6b6b6b] mt-2'>
                    <Link to="/about">ABOUT</Link>
                     <Link to="/skills">SKILLS</Link>
                     <Link to="/projects">PROJECTS</Link>
                     <Link to="/contact">CONTACTS</Link>
                </div>
                <button className="text-[#00ff87] border-2 border-[#00ff87] py-2 px-4 hover:bg-[#00ff87] hover:text-[#080808]" onClick={handleClick}>
                    HIRE ME
                </button>
            </div>

        </div>
    )
}

export default Navbar
