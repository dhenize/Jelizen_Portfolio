import React from 'react'
import logosm from '../assets/Pics/logosmall.png';
import git from '../assets/Pics/gitlogo.png';
import fb from '../assets/Pics/fblogo.png';

const Footer = () => {
  return (
    <footer className=' bg-[#151515] w-full mt-auto'>
        <div className='flex flex-col px-10 py-10 gap-1'>
            <div className='text-sm text-[#F533FF]'>
                <p>
                    ic.juliaann.fajardo@cvsu.edu.ph
                </p>
                <p>
                    ic.dhenizekristafaith.lopez@cvsu.edu.ph
                </p>
                <p>
                    ic.jeannen.basay@cvsu.edu.ph
                </p>
            </div>

            <div className='flex flex-row items-center space-x-0.5'>
                <img src = {git}></img>
                <img src = {fb}></img>
                <img src = {logosm}></img>
            </div>

            <div className='text-sm text-[#33FFC2] whitespace-nowrap'>
                © 2025 - All rights reserved
            </div>
        </div>
    </footer>
  )
}

export default Footer