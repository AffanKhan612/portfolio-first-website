import React from 'react'
import { useNavigate } from 'react-router-dom';

const GoHomeButton = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/")
  }

  return (
    <div>
      <button className='fixed right-5 sm:top-25 top-30 z-50 border bg-green-500 p-2 text-black rounded-xl hover:text-[1.05rem]' onClick={handleGoBack}>Go To Home</button>
    </div>
  )
}

export default GoHomeButton
