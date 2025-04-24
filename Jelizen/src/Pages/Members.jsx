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
import juliaPic from '../assets/Pics/fdp.png';
import dhenizePic from '../assets/Pics/ldp.png';
import jeannenPic from '../assets/Pics/bdp.png';
import email from '../assets/Pics/emaillogo.png';
import profile from '../assets/Pics/proflogo.png';

{/*PICS FOR SKILLS*/}
import figma from '../assets/Pics/s1.png';
import youcut from '../assets/Pics/s2.png';
import picsart from '../assets/Pics/s3.png';
import html from '../assets/Pics/s4.png';
import bootstrap from '../assets/Pics/s5.png';
import css from '../assets/Pics/s6.png';

import python from '../assets/Pics/s1-2.png';
import java from '../assets/Pics/s2-2.png';
import cplus2 from '../assets/Pics/s3-2.png';
import vb from '../assets/Pics/s4-2.png';
import reactjs from '../assets/Pics/s8-2.png';
import medibang from '../assets/Pics/s9-2.png';

import capcut from '../assets/Pics/s1-3.jpg';
import canva from '../assets/Pics/s2-3.png';
import ps from '../assets/Pics/s3-3.png';
import js from '../assets/Pics/s4-3.png';
import php from '../assets/Pics/s5-3.png';


{/*FAJARDO'S PORTFOLIO PICS*/}
import julia1 from '../assets/Pics/julia/j1.jpg';
import julia2 from '../assets/Pics/julia/j2.jpg';
import julia3 from '../assets/Pics/julia/j3.jpg';
import julia4 from '../assets/Pics/julia/j4.jpg';
import julia5 from '../assets/Pics/julia/j5.jpg';
import julia6 from '../assets/Pics/julia/j6.jpg';
import julia7 from '../assets/Pics/julia/j7.jpg';
import julia8 from '../assets/Pics/julia/j8.jpg';
import julia9 from '../assets/Pics/julia/j9.jpg';
import julia10 from '../assets/Pics/julia/j10-1.png';
import julia11 from '../assets/Pics/julia/j10-2.png';
import julia12 from '../assets/Pics/julia/j10-3.png';
import julia13 from '../assets/Pics/julia/j11-1.jpg';
import julia14 from '../assets/Pics/julia/j11-2.jpg';
import julia15 from '../assets/Pics/julia/j11-3.jpg';


{/*LOPEZ'S PORTFOLIO PICS*/}
import dhenz1 from '../assets/Pics/dhenize/d1.png';
import dhenz2 from '../assets/Pics/dhenize/d2-1.png';
import dhenz3 from '../assets/Pics/dhenize/d2-2.png';
import dhenz4 from '../assets/Pics/dhenize/d3.png';
import dhenz5 from '../assets/Pics/dhenize/d4.jpg';
import dhenz6 from '../assets/Pics/dhenize/d5.jpg';
import dhenz7 from '../assets/Pics/dhenize/1POS.png';
import dhenz7_2 from '../assets/Pics/dhenize/1POS2.png';
import dhenz8 from '../assets/Pics/dhenize/d7-1.png';
import dhenz9 from '../assets/Pics/dhenize/d7-2.png';
import dhenz10 from '../assets/Pics/dhenize/d10.jpg';
import dhenz11 from '../assets/Pics/dhenize/d11.png';
import dhenz12 from '../assets/Pics/dhenize/d12.jpg';
import dhenz13 from '../assets/Pics/dhenize/d12-2.jpg';
import dhenz14 from '../assets/Pics/dhenize/d13.jpg';


{/*JEANNEN'S PORTFOLIO PICS*/}
import jean1 from '../assets/Pics/jeannen/je1.jpeg';
import jean2 from '../assets/Pics/jeannen/je2.jpeg';
import jean3 from '../assets/Pics/jeannen/je3.jpeg';
import jean4 from '../assets/Pics/jeannen/je4.jpeg';
import jean5 from '../assets/Pics/jeannen/je5.jpeg';
import jean6 from '../assets/Pics/jeannen/je6.jpeg';
import jean7 from '../assets/Pics/jeannen/je7.jpeg';
import jean8 from '../assets/Pics/jeannen/je8.jpeg';
import jean9 from '../assets/Pics/jeannen/je9.jpeg';
import jean10 from '../assets/Pics/jeannen/je10.jpeg';
import jean11 from '../assets/Pics/jeannen/je11.jpeg';









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
      {name: "Canva", img: canva, percentage: 75},
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
    description: "Born in Bacoor, Cavite and grow up in Imus City, Cavite. Currently, a third year student and taking a information technology at Cavite State University in Imus Campus. Jeannen is interested in web designing, editing video and photos. Aside from this, I also have a little knowledge of drawing but I am not a fan and I also like to listen to music and explore the topic on social media.",
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
  {/*RETURN TO TOP UPON LOADING*/}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

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
    <section className="w-full max-w-screen-2xl px-4 sm:px-6 md:px-8 mx-auto">
  {/* OPENING OF INTRO CARD */}
  <div className="mt-30 flex justify-center items-center flex-wrap relative">

    {/* LEFT ARROW */}
    <button onClick={prevSlide} className="absolute left-2 sm:left-6 text-xl sm:text-3xl text-white z-10">
      <FaArrowAltCircleLeft className="text-white text-[2rem] sm:text-[3rem] opacity-35 hover:text-[#F533FF] mr-2" />
    </button>

    <AnimatePresence mode="wait">
      {/* INNER INTRO CARD */}
      <motion.div
        key={currentMember.name}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row items-center md:items-start text-center md:text-left gap-6"
        >
        {/* MEMBER INFO */}
        <div className="mt-6 w-full md:w-2/3 lg:w-[30rem] lg:py-15 max-w-full">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F533FF]">{currentMember.name}</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#33FFC2] tracking-[5px]">{currentMember.role}</p>
          <p className="text-sm sm:text-base text-white mt-4">{currentMember.description}</p>

          <div className="space-y-2 mt-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <img src={email} className="h-6" />
              <a href={`mailto:${currentMember.email}`} className="text-sm sm:text-base text-[#33FFC2] hover:underline break-all">
                {currentMember.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img src={profile} className="h-6" />
              <p className="text-sm sm:text-base text-[#33FFC2]">{currentMember.fb}</p>
            </div>
          </div>
        </div>

        {/* MEMBER IMAGE */}
        <div>
          <img src={currentMember.img} className="w-32 sm:w-40 md:w-60 lg:w-72 xl:w-80 2xl:w-96 max-w-full mx-auto mb-4 md:mb-0" />
        </div>
      </motion.div>
    </AnimatePresence>

    {/* RIGHT ARROW */}
    <button onClick={nextSlide} className="absolute right-2 sm:right-6 text-xl sm:text-3xl text-white z-10">
      <FaArrowAltCircleRight className="text-white text-[2rem] sm:text-[3rem] opacity-35 hover:text-[#F533FF] ml-2" />
    </button>
  </div>

  {/* DOTS FOR CAROUSEL */}
  <div className="flex justify-center mt-6">
    {Infos.map((_, index) => (
      <span
        key={index}
        className={`mx-1 h-3 w-3 rounded-full ${index === currentIndex ? 'bg-[#33FFC2]' : 'bg-[#D9D9D9]'} transition-all duration-300`}
      />
    ))}
  </div>

  {/* SKILLS SECTION */}
  <div className="flex flex-col justify-center items-center mt-20 mb-10">
    <div className="m-10">
      <p className="text-xl sm:text-2xl md:text-3xl text-[#33FFC2] font-semibold tracking-[10px] uppercase">skills</p>
    </div>

    <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 md:gap-6 px-2 sm:px-4">
      {currentMember.skills.map((skill, index) => (
        <SkillPercent key={index} image={skill.img} percentage={skill.percentage} animate={skillsInView} />
      ))}
    </div>

    {/* TAGS */}
    <div className="flex flex-wrap justify-center items-center mt-10 gap-3 px-4">
      {currentMember.tags.map((tag, index) => (
        <p key={index} className="bg-[#F533FF] text-[#F0F0F0] text-sm md:text-base rounded-xl px-4 py-1">
          {tag}
        </p>
      ))}
    </div>
  </div>

  {/* GALLERY SECTION */}
  <div className="flex flex-col justify-center items-center">
    <p className="text-xl sm:text-2xl md:text-3xl text-[#33FFC2] font-semibold tracking-[10px] uppercase">projects</p>
  </div>

  <div className="flex flex-col items-center mt-5 mb-40 bg-[#3F3A3A] px-4 sm:px-10 pt-5 pb-7 rounded-3xl">
    <div className="w-full max-w-4xl aspect-video mb-6 overflow-hidden rounded-xl shadow-lg">
      <img
        src={featuredImage}
        alt="Featured"
        className="w-full h-full object-cover rounded-xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      />
    </div>

    {isModalOpen && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center" onClick={() => setIsModalOpen(false)}>
        <img
          src={featuredImage}
          alt="Full view"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}

    <div className="gallery-scroll flex overflow-x-auto gap-3 sm:gap-4 max-w-full py-3 bg-[#2D2C2C] px-4 sm:px-6 rounded-2xl">
      {currentMember.gallery.map((img, index) => (
        img && (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 ${
              featuredImage === img ? 'ring-4 ring-[#F533FF]' : ''
            }`}
            onClick={() => setFeatureddImage(img)}
          />
        )
      ))}
    </div>
  </div>
</section>

  )
}

export default Members