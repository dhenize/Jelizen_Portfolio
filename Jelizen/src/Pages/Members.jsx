import React, {useState, useEffect} from 'react';

{/*FOR PERCENTAGE ANIMATION (IMPORTING JS PATH)*/}
import SkillPercent from '../Components/SkillPercent.jsx';

{/*ICONS FOR CAROUSEL*/}
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

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

import python from '../assets/pics/s1-2.png';
import java from '../assets/pics/s2-2.png';
import cplus2 from '../assets/pics/s3-2.png';
import vb from '../assets/pics/s4-2.png';
import reactjs from '../assets/pics/s8-2.png';
import medibang from '../assets/pics/s9-2.png';

import capcut from '../assets/pics/s1-3.jpg';
import canva from '../assets/pics/s2-3.png';
import ps from '../assets/pics/s3-3.png';
import js from '../assets/pics/s4-3.png';
import php from '../assets/pics/s5-3.png';



{/*ARRAY FOR MEMBERS INFO*/}
const Infos =[
  {
    name: "JULIA ANN FAJARDO",
    role: "ui/ux designer & qa tester",
    description: "Born and raised in Bacoor City, Cavite and currently a 3rd year Information Technology student from Cavite State University - Imus Campus. Julia has strong interest in photography, video editing and image manipulation. Aside from editing, she enjoys exploring the web, looking for latest news and trends in technology and other fascinating topics. She also like drawing as her way to express and capture her innermost thoughts and ideas.",
    email: "ic.juliaann.fajardo@cvsu.edu.ph",
    fb: "Julia Fajardo",
    img: dp,
    skills: [
      {name: "Figma", img: figma, percentage: 60},
      {name: "YouCut", img: youcut, percentage: 75},
      {name: "PicsArt", img: picsart, percentage: 75},

      {name: "HTML", img: html, percentage: 35},
      {name: "Bootstrap", img: bootstrap, percentage: 35},
      {name: "CSS", img: css, percentage: 35}
    ],
    tags: ["designing", "editing", "qa testing"]
  },
  {
    name: "DHENIZE KRISTA FAITH LOPEZ",
    role: "fullstack developer",
    description: "Born in Manila and grew up in Imus City, Cavite. Currently, a third-year student taking information technology at Cavite State University—Imus Campus. Dhenize is an aspiring QA (Quality Assurance) interested in checking and troubleshooting systems. She is driven to learn more to attain her goal of being a full-stack developer. Additionally, she is passionate about creating digital and traditional arts, editing images and videos, and producing music.",
    email: "ic.dhenizekristafaith.lopez@cvsu.edu.ph",
    fb: "Dhenize C. Lopez",
    img: dp,
    skills: [
      {name: "Python", img: python, percentage: 50},
      {name: "Java", img: java, percentage: 75},
      {name: "C++", img: cplus2, percentage: 65},
      {name: "Visual_Basic", img: vb, percentage: 45},

      {name: "Figma", img: figma, percentage: 80},
      {name: "HTML", img: html, percentage: 80},
      {name: "CSS", img: css, percentage: 70},
      {name: "React", img: reactjs, percentage: 60},
      {name: "Medibang", img: medibang, percentage: 65}
    ],
    tags: ["designing", "coding", "troubleshooting"]
  },
  {
    name: "JEANNEN BASAY",
    role: "frontend designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tortor dui. In hac habitasse platea dictumst. Suspendisse potenti. Donec eu porta orci. Duis ligula enim, consectetur sit amet tellus quis, euismod aliquam velit. Nam finibus nulla vitae diam luctus venenatis. Nulla cursus erat enim, eget lacinia lacus eleifend in. Proin et consequat mi, sit amet iaculis nulla. Nunc commodo porttitor suscipit. Donec mattis justo est, id tincidunt lectus feugiat quis.",
    email: "ic.jeannen.basay@cvsu.edu.ph",
    fb: "Jeannen Kummer Basay",
    img: dp,
    skills: [
      {name: "Capcut", img: capcut, percentage: 70},
      {name: "PicsArt", img: picsart, percentage: 70},
      {name: "Photoshop", img: ps, percentage: 35},
      {name: "Canva", img: canva, percentage: 70},
      {name: "Figma", img: figma, percentage: 5},

      {name: "HTML", img: html, percentage: 60},
      {name: "Bootstrap", img: bootstrap, percentage: 35},
      {name: "CSS", img: css, percentage: 50},

      {name: "JavaScript", img: js, percentage: 10},
      {name: "Python", img: python, percentage: 2},
      {name: "PHP", img: php, percentage: 10},
      {name: "C++", img: cplus2, percentage: 2}
    ],
    tags: ["designing", "editing", "front end"]
  }
];



{/*MAIN FUNCTION*/}
const Members = () => {

  {/*FOR CAROUSEL SLIDES*/}
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Infos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === Infos.length - 1 ? 0 : prev + 1));
  };

  const currentMember = Infos[currentIndex];


  return (
    <section>
      {/*OPENING OF INTRO CARD*/}
      <div className='ml-40 mr-40 mt-30 columns-2 flex justify-center'>

        <button onClick = {prevSlide}>
          <FaArrowAltCircleLeft className='text-white text-[3rem] hover:text-[#F533FF] mr-2'></FaArrowAltCircleLeft>
        </button>

        {/*OPENING OF INNER INTRO CARD*/}
        <div className='mt-13 w-2xl'>
          <p className='text-[2.5rem] text-[#F533FF]'>
          {currentMember.name}
          </p>
          
          <p className='text-[2rem] text-[#33FFC2] tracking-[7px]'>
          {currentMember.role}
          </p>
          
          <p className='text-[1rem] text-white mt-6 max-w-110'>
          {currentMember.description}
          </p>
          
          
          <div className='space-y-2 mt-4'>
            <div className='flex flex-row items-center space-x-1.5'>
              <img src ={email} className='h-6'></img>
              <p className='text-[1rem] text-[#33FFC2]'>
              {currentMember.email}
              </p>
            </div>
          
            <div className='flex flex-row items-center space-x-3.5'>
              <img src ={profile} className='h-6 ml-1.5'></img>
              <p className='text-[1rem] text-[#33FFC2]'>
              {currentMember.fb}
              </p>
            </div>
          </div>
        
        </div> {/*ENDING OF INNER INTRO CARD*/}
        
        <div>
          <img src = {dp} className='max-w-100'></img>
        </div>

        <button onClick = {nextSlide}>
          <FaArrowAltCircleRight className='text-white text-[3rem] hover:text-[#F533FF] ml-2'></FaArrowAltCircleRight>
        </button>

      </div> {/*ENDING OF INTRO CARD*/}
      

      {/*DOTS FOR CAROUSEL*/}
      <div className='flex justify-center mt-6'>
        {Infos.map((_, index) => (
          <span
            key={index}
            className={`mx-1 h-3 w-3 rounded-full ${index === currentIndex ? 'bg-[#33FFC2]' : 'bg-[#D9D9D9]'} transition-all duration-300`}
          />
        ))}
      </div>
      
      
      


      {/*OPENING OF SKILLS*/}
      <div className='flex justify-center items-center flex-col m-40'>
        <div className='m-10'>
          <p className='text-[2rem] text-[#33FFC2] font-semibold tracking-[15px]'>
          skills
          </p>
        </div>
      

        <div className='grid grid-cols-5 gap-20 mt-10 mb-20'>
          {currentMember.skills.map((skill, index) => (
            <SkillPercent key={index} image={skill.img} percentage={skill.percentage} />
          ))}
        </div>

        
        <div className='flex flex-row justify-center items-center mt-20 mb-30 space-x-20'>
        {currentMember.tags.map((tags, index) => (
          <p key={index} className='bg-[#F533FF] text-[#F0F0F0] text-[1.3rem] rounded-xl px-5 py-1'>
            {tags}
          </p>
        ))}
        </div>
        

      </div> {/*ENDING OF SKILLS*/}





      {/*FOR GALLERY*/}
      <div className='flex justify-center items-center m-40'>
        <p className='text-[2rem] text-[#33FFC2] font-semibold tracking-[15px]'>
          projects
        </p>
      </div>

    </section>
  )
}

export default Members