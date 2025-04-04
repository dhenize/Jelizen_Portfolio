import React from 'react'
import logobig from '../assets/pics/logobig.png';

const Homepage = () => {
  return (
    <section className='m-40 flex flex-col justify-center items-center'>
      <div className = "grid gap-2">
        <img className = "max-h-35" src = {logobig}></img>
      </div>

      <div>
        <p className='text-[30px] text-[#33FFC2] font-semibold tracking-[15px]'>
          Jelizen
        </p>
      </div>

      <div>
        <p className='text-[13px] text-white tracking-wide'>
          expand your imagination
        </p>
      </div>
    </section>
  )
}

export default Homepage