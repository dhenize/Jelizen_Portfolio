import React, {useState, useEffect} from 'react';

{/*FOR PERCENTAGE ANIMATION (IMPORTING JS PATH)*/}
import SkillPercent from '../Components/SkillPercent.jsx';

{/*ICONS FOR CAROUSEL*/}
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

{/*IMPORT FOR UPON SCROLLING ONLY FUNCTION*/}
import useInView from '../Components/useInView.js';

{/*IMPORT FOR MEMBER TRANSITION ANIMATION*/}
import{ motion, AnimatePresence } from 'framer-motion';


{/*PICS FOR INTRODUCTION*/}
import juliaPic from '../assets/pics/fdp.png';
import dhenizePic from '../assets/pics/ldp.png';
import jeannenPic from '../assets/pics/bdp.png';
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


{/*FAJARDO'S PORTFOLIO PICS*/}
import julia1 from '../assets/pics/julia/j1.jpg';
import julia2 from '../assets/pics/julia/j2.jpg';
import julia3 from '../assets/pics/julia/j3.jpg';
import julia4 from '../assets/pics/julia/j4.jpg';
import julia5 from '../assets/pics/julia/j5.jpg';
import julia6 from '../assets/pics/julia/j6.jpg';
import julia7 from '../assets/pics/julia/j7.jpg';
import julia8 from '../assets/pics/julia/j8.jpg';
import julia9 from '../assets/pics/julia/j9.jpg';
import julia10 from '../assets/pics/julia/j10-1.png';
import julia11 from '../assets/pics/julia/j10-2.png';
import julia12 from '../assets/pics/julia/j10-3.png';
import julia13 from '../assets/pics/julia/j11-1.jpg';
import julia14 from '../assets/pics/julia/j11-2.jpg';
import julia15 from '../assets/pics/julia/j11-3.jpg';


{/*LOPEZ'S PORTFOLIO PICS*/}
import dhenz1 from '../assets/pics/dhenize/d1.png';
import dhenz2 from '../assets/pics/dhenize/d2-1.png';
import dhenz3 from '../assets/pics/dhenize/d2-2.png';
import dhenz4 from '../assets/pics/dhenize/d3.png';
import dhenz5 from '../assets/pics/dhenize/d4.jpg';
import dhenz6 from '../assets/pics/dhenize/d5.jpg';
import dhenz7 from '../assets/pics/dhenize/1POS.png';
import dhenz7_2 from '../assets/pics/dhenize/1POS2.png';
import dhenz8 from '../assets/pics/dhenize/d7-1.png';
import dhenz9 from '../assets/pics/dhenize/d7-2.png';
import dhenz10 from '../assets/pics/dhenize/d10.jpg';
import dhenz11 from '../assets/pics/dhenize/d11.png';
import dhenz12 from '../assets/pics/dhenize/d12.jpg';
import dhenz13 from '../assets/pics/dhenize/d12-2.jpg';
import dhenz14 from '../assets/pics/dhenize/d13.jpg';


{/*LOPEZ'S PORTFOLIO PICS*/}
import jean1 from '../assets/pics/jeannen/je1.jpeg';
import jean2 from '../assets/pics/jeannen/je2.jpeg';
import jean3 from '../assets/pics/jeannen/je3.jpeg';
import jean4 from '../assets/pics/jeannen/je4.jpeg';
import jean5 from '../assets/pics/jeannen/je5.jpeg';
import jean6 from '../assets/pics/jeannen/je6.jpeg';
import jean7 from '../assets/pics/jeannen/je7.jpeg';
import jean8 from '../assets/pics/jeannen/je8.jpeg';
import jean9 from '../assets/pics/jeannen/je9.jpeg';
import jean10 from '../assets/pics/jeannen/je10.jpeg';
import jean11 from '../assets/pics/jeannen/je11.jpeg';









{/*ARRAY FOR MEMBERS INFO*/}
const Infos =[
  {
    name: "JULIA ANN FAJARDO",
    role: "ui/ux designer & qa tester",
    description: "Born and raised in Bacoor City, Cavite and currently a 3rd year Information Technology student from Cavite State University - Imus Campus. Julia has strong interest in photography, video editing and image manipulation. Aside from editing, she enjoys exploring the web, looking for latest news and trends in technology and other fascinating topics. She also like drawing as her way to express and capture her innermost thoughts and ideas.",
    email: "ic.juliaann.fajardo@cvsu.edu.ph",
    fb: "Julia Fajardo",
    img: juliaPic,
    skills: [
      {name: "Figma", img: figma, percentage: 60},
      {name: "YouCut", img: youcut, percentage: 75},
      {name: "PicsArt", img: picsart, percentage: 75},

      {name: "HTML", img: html, percentage: 35},
      {name: "Bootstrap", img: bootstrap, percentage: 35},
      {name: "CSS", img: css, percentage: 35}
    ],
    tags: ["designing", "editing", "qa testing"],
    gallery: [julia1, julia2 ,julia3, ,julia4, julia5, julia6, julia7, julia8, julia9, julia10, julia11, julia12, julia13, julia14, julia15]
  },
  {
    name: "DHENIZE KRISTA FAITH LOPEZ",
    role: "fullstack developer",
    description: "Born in Manila and grew up in Imus City, Cavite. Currently, a third-year student taking information technology at Cavite State University—Imus Campus. Dhenize is an aspiring QA (Quality Assurance) interested in checking and troubleshooting systems. She is driven to learn more to attain her goal of being a full-stack developer. Additionally, she is passionate about creating digital and traditional arts, editing images and videos, and producing music.",
    email: "ic.dhenizekristafaith.lopez@cvsu.edu.ph",
    fb: "Dhenize C. Lopez",
    img: dhenizePic,
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
    tags: ["designing", "coding", "troubleshooting"],
    gallery: [dhenz1, dhenz2, dhenz3, dhenz4, dhenz5, dhenz6, dhenz7, dhenz7_2, dhenz8, dhenz9, dhenz10, dhenz11, dhenz12, dhenz13, dhenz14]
  },
  {
    name: "JEANNEN BASAY",
    role: "frontend designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tortor dui. In hac habitasse platea dictumst. Suspendisse potenti. Donec eu porta orci. Duis ligula enim, consectetur sit amet tellus quis, euismod aliquam velit. Nam finibus nulla vitae diam luctus venenatis. Nulla cursus erat enim, eget lacinia lacus eleifend in. Proin et consequat mi, sit amet iaculis nulla. Nunc commodo porttitor suscipit. Donec mattis justo est, id tincidunt lectus feugiat quis.",
    email: "ic.jeannen.basay@cvsu.edu.ph",
    fb: "Jeannen Kummer Basay",
    img: jeannenPic,
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
    tags: ["designing", "editing", "front end"],
    gallery: [jean1, jean2, jean3, jean4, jean5, jean6, jean7, jean8, jean9, jean10, jean11]
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

  const [featuredImage, setFeatureddImage] = useState(currentMember.gallery[0]);
  useEffect(() => {
    setFeatureddImage(currentMember.gallery[0]);
  }, [currentIndex]);


  {/*FOR SKILLS PERCENTAGE*/}
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });





{/*MAIN DESIGN*/}
  return (
    <section>
      {/*OPENING OF INTRO CARD*/}
      <div className='mt-30 flex justify-center'>

        {/*LEFT ARROW FOR CAROUSEL*/}
        <button onClick = {prevSlide} className='left-4 md:left-8 text-xl md:text-3xl text-white z-10'>
          <FaArrowAltCircleLeft className='text-white text-[3rem] opacity-35 hover:text-[#F533FF] mr-2'></FaArrowAltCircleLeft>
        </button>

        <AnimatePresence mode ="wait">

          {/*OPENING OF INNER INTRO CARD*/}
          <motion.div 
            key={currentMember.name}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col-reverse md:flex-row space-x-6 items-center md:items-start text-center md:text-left'>
            
            <div className='mt-6 max-w-full lg:w-150 md:mt-13 md:w-80'>
              <p className='lg:text-[2.5rem] md:text-[2rem] sm:text-[2rem] text-[#F533FF]'>
              {currentMember.name}
              </p>
              
              <p className='lg:text-[2rem] md:text-[1.5rem] sm:text-[1.5rem] text-[#33FFC2] tracking-[7px]'>
              {currentMember.role}
              </p>
              
              <p className='lg:text-[1rem] md:text-[0.9rem] sm:text-[0.9rem] text-white mt-6'>
              {currentMember.description}
              </p>
              
              
              <div className='space-y-2 mt-4 flex flex-col items-center md:items-start'>
                <div className='flex flex-row items-center space-x-1.5'>
                  <img src ={email} className='h-6'></img>
                  <a href={`mailto:${currentMember.email}`} className='text-sm sm:text-base text-[#33FFC2] hover:underline break-all'>
                    {currentMember.email}
                  </a>
                </div>
              
                <div className='flex flex-row items-center space-x-3.5'>
                  <img src ={profile} className='h-6 ml-1.5'></img>
                  <p className='text-[1rem] sm:text-[0.9rem] text-[#33FFC2]'>
                  {currentMember.fb}
                  </p>
                </div>
              </div>
            </div>
            
            {/*PICTURE OF MEMBER*/}
            <div>
              <img src = {currentMember.img} className='max-w-100 min-w-40 lg:w-100 md:w-90 sm:w-50 mx-auto mb-4 md:mb-0'></img>
            </div>
          
          </motion.div> {/*ENDING OF INNER INTRO CARD*/}

        </AnimatePresence>


        {/*RIGHT ARROW FOR CAROUSEL*/}
        <button onClick = {nextSlide} className='right-4 md:right-8 text-xl md:text-3xl text-white z-10'>
          <FaArrowAltCircleRight className='text-white text-[3rem] opacity-35 hover:text-[#F533FF] ml-2'></FaArrowAltCircleRight>
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
      <div className='flex justify-center items-center flex-col m-25'>
        <div className='m-10'>
          <p className='text-[2rem] text-[#33FFC2] font-semibold tracking-[15px]'>
          skills
          </p>
        </div>
      

        <div ref={skillsRef} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 mb-20 px-4'>
          {currentMember.skills.map((skill, index) => (
            <SkillPercent
              key={index}
              image={skill.img}
              percentage={skill.percentage}
              animate={skillsInView}
            />
          ))}
        </div>


        
        <div className='flex flex-row justify-center items-center mt-10 mb-20 space-x-20'>
          {currentMember.tags.map((tags, index) => (
            <p key={index} className='bg-[#F533FF] text-[#F0F0F0] text-[1.3rem] rounded-xl px-5 py-1'>
              {tags}
            </p>
          ))}
        </div>
        

      </div> {/*ENDING OF SKILLS*/}





      {/*FOR GALLERY*/}
      <div className='flex flec-col justify-center items-center'>
        <p className='text-[2rem] text-[#33FFC2] font-semibold tracking-[15px]'>
          projects
        </p>
      </div>
      <div className='flex flex-col items-center mt-5 mb-40 bg-[#3F3A3A] m-40 pt-5 pb-7 rounded-4xl'>
        <div className='max-w-4xl h-[350px] mb-6 overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-in-out'>
          <img
            src={featuredImage}
            alt="Featured"
            className="w-full h-full object-cover rounded-xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>


        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)} // Close on background click
          >
            <img
              src={featuredImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </div>
        )}


        <div className="gallery-scroll flex overflow-x-auto gap-4 max-w-full py-3 bg-[#2D2C2C] px-6 rounded-2xl">
          {currentMember.gallery.map((img, index) => (
            img && (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer inline-block transition-transform duration-300 ease-in-out hover:scale-105 ${
                  featuredImage === img ? 'ring-4 ring-[#F533FF]' : ''
                }`}
                onClick={() => setFeatureddImage(img)}
              />
            )
          ))}
        </div>
      </div>
      {/*ENDING FOR GALLERY*/}
      



    </section>
  )
}

export default Members