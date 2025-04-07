import React from 'react'
import logosm from '../assets/pics/logosmall.png';
import git from '../assets/pics/gitlogo.png';
import fb from '../assets/pics/fblogo.png';

const Footer = () => {
  return (
    <footer className='flex flex-col bg-[#151515]'>
        <div className='m-9 ml-30'>
            <div className='mb-3'>
                <p className='text-[0.9rem] text-[#F533FF]'>
                    ic.juliaann.fajardo@cvsu.edu.ph
                </p>
                <p className='text-[0.9rem]xt-[1rem] text-[#F533FF]'>
                    ic.dhenizekristafaith.lopez@cvsu.edu.ph
                </p>
                <p className='text-[0.9rem] text-[#F533FF]'>
                ic.jeannen.basay@cvsu.edu.ph
                </p>
            </div>

            <div className='flex flex-row items-center mb-3 space-x-0.5'>
                <img src = {git}></img>
                <img src = {fb}></img>
                <img src = {logosm}></img>
            </div>

            <div>
            <p className='text-[0.9rem] text-[#33FFC2]'>
                © 2025 - All rights reserved
            </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer