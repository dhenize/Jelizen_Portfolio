import React from 'react'

{/*PICS FOR INTRODUCTION*/}
import dp from '../assets/pics/sampledp2.png';
import email from '../assets/pics/emaillogo.png';
import profile from '../assets/pics/proflogo.png';

{/*PICS FOR SKILLS*/}
import figma from '../assets/pics/s1.png';
import youcut from '../assets/pics/s2.png';
import picsart from '../assets/pics/s3.png';
import html from '../assets/pics/s4.png';
import bootstrap from '../assets/pics/s5.png';
import css from '../assets/pics/s6.png';


const Members = () => {
  return (
    <section>
      <div className='ml-40 mr-40 mt-40 columns-2 flex justify-center'>
        
        <div className='mt-13'>
          <p className='text-[2.5rem] text-[#F533FF]'>
            JULIA ANN FAJARDO
          </p>

          <p className='text-[2rem] text-[#33FFC2] tracking-[7px]'>
                ui/ux designer & qa tester
          </p>

          <p className='text-[1rem] text-white mt-6 max-w-110'>
            Born and raised in Bacoor City, Cavite and  currently a 3rd year Information Technology student from Cavite State University - Imus Campus. Julia has strong interest in photography, video editing and image manipulation. Aside from editing, she enjoys exploring the web, looking for latest news and trends in technology and other fascinating topics. She also like drawing as her way to express and capture her innermost thoughts and ideas.
          </p>

          <div className='space-y-2 mt-4'>
            <div className='flex flex-row items-center space-x-1.5'>
              <img src ={email} className='h-6'></img>
              <p className='text-[1rem] text-[#33FFC2]'>
                ic.juliaann.fajardo@cvsu.edu.ph
              </p>
            </div>
            <div className='flex flex-row items-center space-x-3.5'>
              <img src ={profile} className='h-6 ml-1.5'></img>
              <p className='text-[1rem] text-[#33FFC2]'>
                Julia Fajardo
              </p>
            </div>
          </div>
          
        </div>

        <div>
          <img src = {dp} className='max-w-100'></img>
        </div>

      </div>

      <div className='flex justify-center m-10'>
        <p className='text-[1rem] text-white'>
          ...
        </p>
      </div>
      

      <div className='flex justify-center items-center flex-col m-40'>
        <div className='m-10'>
         <p className='text-[2rem] text-[#33FFC2] tracking-[15px]'>
            skills
          </p>
        </div>


        <div className='flex flex-row justify-center items-center mt-10 mb-20 space-x-50'>
          <div className='flex flex-col items-center'>
            <img src = {figma}></img>
            <p className='text-[2rem] text-[#F533FF]'>
              60 %
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img src = {youcut}></img>
            <p className='text-[2rem] text-[#F533FF]'>
              75 %
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img src = {picsart}></img>
            <p className='text-[2rem] text-[#F533FF]'>
              75 %
            </p>
          </div>
        </div>


        <div className='flex flex-row justify-center items-center mt-10 mb-10 space-x-20'>
          <div className='flex flex-col items-center'>
            <img src = {html}></img>
            <p className='text-[1.5rem] text-[#F533FF]'>
              35 %
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img src = {bootstrap}></img>
            <p className='text-[1.5rem] text-[#F533FF]'>
              35 %
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img src = {css}></img>
            <p className='text-[1.5rem] text-[#F533FF]'>
              35 %
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Members