import React, { useEffect, useState } from 'react';
import logobig from '../assets/pics/logobig.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



{/*FOR MEMBERS CARD*/}
import MemberCard from '../Components/MembersCard'; 


{/*PICS OF MEMBERS*/}
import juliaPic from '../assets/pics/fdp.png';
import dhenizePic from '../assets/pics/ldp.png';
import jeannenPic from '../assets/pics/bdp.png';


//FOR GENERAL SKILLS
{/*IMPORT FOR UPON SCROLLING ONLY FUNCTION*/}
import useInView from '../Components/useInView.js';

{/*FOR PERCENTAGE ANIMATION (IMPORTING JS PATH)*/}
import GenSkills from '../Components/GenSkills.jsx';


{/*PICS FOR SKILLS*/}
import figma from '../assets/pics/s1.png';
import youcut from '../assets/pics/s2.png';
import picsart from '../assets/pics/s3.png';

import java from '../assets/pics/s2-2.png';
import cplus2 from '../assets/pics/s3-2.png';
import reactjs from '../assets/pics/s8-2.png';

import html from '../assets/pics/s4.png';
import bootstrap from '../assets/pics/s5.png';
import css from '../assets/pics/s6.png';



{/*PICS FOR PROJECT*/}
import fit from '../assets/pics/group/fit4.png';
import fred from '../assets/pics/group/fredfries.png';
import eduq from '../assets/pics/group/eduq.png';
import tools from '../assets/pics/group/toolsrus.png';
import dream from '../assets/pics/group/dreamy.png';


{/*Maps for location */}
import mapImage from '../assets/pics/map.png';





{/*MAIN FUNCTION*/}
function Homepage() {
  //Introduction
  const introText = "Jelizen is committed to make difference in digital landscape through creating intuitive and visually stunning websites.";

  const words = introText.split(" ");
  const duration = 3;
  const delayperword = duration / words.length;


  //MISSION AND VISION
  const missionText = "Our team is dedicated to develop websites that is focused on functionality, user-friendliness and visually appealing interface. We make efforts on crafting solutions by combining dedication, hard work, and technology.";
  const visionText = "Jelizen strives to shape the future where technology makes a big difference in people's lives through crafting high-performing, refined, and interactive digital solutions.";

  const typewriter = {
    hidden: { width: 0 },
    visible: (i) => ({
      width: "auto",
      transition: {
        duration: 3,
        ease: "linear",
      },
    }),
  };

  const wordfaded = (index, totalduration) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: index * (totalduration / missionText.split(" ").length),
        duration: 0.3,
      },
    },
  });


  // ABOUT US
  const aboutusText = "Jalizen is a team of web developers and designers from Cavite State University - Imus Campus., dedicated to build user-friendly, and aesthetically appealing digital experiences, with expertise in front-end, back-end, and ui/ux design.";
  const aboutusText1 = "Our goal is to develop high-quality websites to cater various needs, driven by creativity, functionality, and passion for web designing.";


  const aboutWords1 = aboutusText.split(" ");
  const aboutWords2 = aboutusText1.split(" ");
  const totalDuration = 3;

  const wordFade = (index, totalDuration, totalWords) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: index * (totalDuration / totalWords),
        duration: 0.3,
      },
    },
  });


  //MEMBERS
  const teamMembers = [
    { name: 'Julia', role: 'UI/UX Designer', image: juliaPic },
    { name: 'Dhenize', role: 'Fullstack Developer', image: dhenizePic },
    { name: 'Jeannen', role: 'Front-End Developer', image: jeannenPic }
  ];

  const [hoveredMember, setHoveredMember] = useState(null);
  const [showRole, setShowRole] = useState(false);

  const handleMouseEnter = (name) => {
    setHoveredMember(name);
    setShowRole(true);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
    setShowRole(false);
  };

  const navigate = useNavigate();


  

  
  //TECHNICAL SKILLS
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });
  const skills = [
    { name: "Figma", img: figma, percentage: 70 },
    { name: "YouCut", img: youcut, percentage: 75 },
    { name: "PicsArt", img: picsart, percentage: 72 },
    { name: "Java", img: java, percentage: 75 },
    { name: "React", img: reactjs, percentage: 60 },
    { name: "C++", img: cplus2, percentage: 65 },
    { name: "HTML", img: html, percentage: 58 },
    { name: "Bootstrap", img: bootstrap, percentage: 35 },
    { name: "CSS", img: css, percentage: 52 }
  ];
  

  //PROJECTS
  {/*CAROUSEL FUNCTION*/}
  const [currentIndex, setCurrentIndex] = useState(0);
    const projects = [
      {img: fit, title: 'Fit4School', desc: 'A School Uniform Appointment and Queuing System '},
      {img: fred, title: 'Fred Fries POS', desc: 'A Point-of-sale System designed for snack franchise store Fred Fries.'},
      {img: eduq, title: 'EduQueue', desc: 'A School Registrar Ticketing System.'},
      {img: tools, title: 'Tools R Us', desc: 'A Point-of-sale System designed for a Tools Store.'},
      {img: dream, title: 'Dreamy D Lite', desc: 'A Python-based Point-of-sale System for an Ice Cream Store.'}
    ];
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, [projects.length]);






  {/*MAIN DESIGN*/}
  return (
    <section>
      {/* OPENING (LOGO, NAME, TAGLINE) */}
      <div className='my-20 sm:my-24 md:my-32 lg:my-40 xl:my-48 2xl:my-60  flex flex-col justify-center items-center'>
        <div className="grid gap-2">
          <img className="h-30 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40 object-contain" src={logobig} alt="Logo" />
        </div>

        <div className='flex justify-center items-center mt-4'>
          <p className='text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] text-[#33FFC2] font-semibold tracking-[10px] sm:tracking-[12px] md:tracking-[15px]'>
            Jelizen
          </p>
        </div>

        <div className='flex justify-center items-center mt-2'>
          <p className='text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] text-white tracking-wide text-center'>
            expand your imagination
          </p>
        </div>
      </div>

      {/* INTRODUCTION TEXT */}
      <motion.div
        className="text-center px-4 sm:px-6 lg:px-10 py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // <- Only animate on first scroll-in
      >
        <motion.p
          className="text-[16px] sm:text-[18px] md:text-[20px] text-white max-w-4xl mx-auto leading-relaxed flex flex-wrap justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08 // controls speed of "typing"
              }
            }
          }}
        >
          {words.map((word, index) => (
            <motion.span
              className="inline-block mr-[4px]"
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08
              }}
              viewport={{ once: true }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.p>
      </motion.div>


      {/* MISSION AND VISION */}
      <motion.div
        className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-10 sm:py-20 mt-16 sm:mt-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>

          {/* MISSION LINE */}
          <div className='flex flex-col'>
            <div className='flex items-center mb-5 w-full'>
              <motion.p
                className='text-[#33FFC2] text-[22px] sm:text-[24px] md:text-[25px] lg:text-[24px] xl:text-[25px] 2xl:text-[26px] tracking-widest whitespace-nowrap mr-4 overflow-hidden'
                initial="hidden"
                whileInView="visible"
                custom={0}
                variants={typewriter}
                viewport={{ once: true }}
              >
                m i s s i o n
              </motion.p>

              <motion.div
                className='h-[1.5px] bg-white flex-grow shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff]'
                whileInView={{ scaleX: 3 }}
                transition={{ duration: 2 }}
                style={{ originX: 0 }}
              />
            </div>

            <motion.p
              className='text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] text-white pl-2 sm:pl-5 leading-relaxed'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true}}
            >
              {missionText.split(" ").map((word, index) => (
                <motion.span
                  className='inline-block mr-[2px]'
                  key={index}
                  variants={wordfaded(index, 3)}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* VISION LINE */}
          <div className='mt-40 sm:mt-15 md:mt-55'>
            <div className='flex items-center mb-5 w-full justify-end'>
              <motion.div
                className='h-[1.5px] bg-white flex-grow shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff] mr-2 sm:mr-4 max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[350px]'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 3 }}
                transition={{ duration: 2 }}
                style={{ originX: 1 }}
              />
              <motion.p
                className='text-[#33FFC2] text-[22px] sm:text-[24px] md:text-[25px] lg:text-[24px] xl:text-[25px] 2xl:text-[26px] tracking-widest whitespace-nowrap text-right overflow-hidden'
                initial="hidden"
                whileInView="visible"
                custom={1}
                variants={typewriter}
                viewport={{ once: true }}
              >
                v i s i o n
              </motion.p>
            </div>

            <motion.p
              className='text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] text-white pr-2 sm:pr-5 leading-relaxed text-right'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              {visionText.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 2 }}
                  transition={{ delay: index * 0.3 }}
                  className='inline-block mr-[2px]'
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* PROFILE/MEMBERS */}
      <motion.div
        id="about"
        className="text-center mt-10 px-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className="text-[15px] tracking-widest text-white">the minds behind</p>
        <motion.p
          className="text-[#33FFC2] text-[25px] mt-2 mb-10"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2 }}
        >
          Meet Our Team
        </motion.p>

        <div className="flex justify-center items-end mt-10">
        {teamMembers.map((member, index) => (
            <MemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              isHovered={hoveredMember === member.name}
              showRole={hoveredMember === member.name && showRole}
              onHover={() => handleMouseEnter(member.name)}
              onLeave={handleMouseLeave}
              isActive={hoveredMember === member.name}             
            />  
          ))}
        </div>

        {/* Carousel-like dots below */}
        <div className="flex justify-center mt-4 space-x-2">
          {teamMembers.map((member) => (
            <span
              key={member.name}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${hoveredMember === member.name ? 'bg-[#33FFC2]' : 'bg-gray-400'}
              `}
            />
          ))}
        </div>

      </motion.div>


      {/* ABOUT US */}
      <motion.div
        className='px-4 sm:px-6 lg:px-10 py-20 mt-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='flex flex-col'>
          {/* Header */}
          <div className='flex items-center mb-5 w-full'>
            <motion.p
              className='text-[#33FFC2] text-[22px] sm:text-[24px] md:text-[25px] lg:text-[24px] xl:text-[25px] 2xl:text-[26px] tracking-widest whitespace-nowrap mr-4 overflow-hidden'
              initial="hidden"
              whileInView="visible"
              custom={0}
              variants={typewriter}
              viewport={{ once: true }}
            >
              a b o u t &nbsp;u s
            </motion.p>
            <motion.div
              className='h-[1.5px] bg-white flex-grow shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff]'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2 }}
              style={{ originX: 0 }}
            />
          </div>

          {/* Paragraph 1 */}
          <motion.p
            className='text-[16px] sm:text-[17px] text-white pl-5 leading-relaxed flex flex-wrap mb-5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutWords1.map((word, index) => (
              <motion.span
                key={index}
                className='inline-block mr-[4px]'
                variants={wordFade(index, totalDuration, aboutWords1.length)}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            className='text-[16px] sm:text-[17px] text-white pl-5 leading-relaxed flex flex-wrap'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutWords2.map((word, index) => (
              <motion.span
                key={index}
                className='inline-block mr-[4px]'
                variants={wordFade(index, totalDuration, aboutWords2.length)}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
        </div>
      </motion.div>


      {/* TECHNICAL SKILLS */}
      <div className='mb-40'>
        <div className='flex items-center mb-5 w-full justify-end'>
          <motion.div
            className='h-[1.5px] bg-white flex-grow shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff] mr-4'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0.9 }}
            transition={{ duration: 2 }}
            style={{ originX: 1 }}
            />
          <motion.p 
          className='text-[#33FFC2] text-[22px] sm:text-[24px] md:text-[25px] lg:text-[24px] xl:text-[25px] 2xl:text-[26px] tracking-widest  whitespace-nowrap text-right pr-2 sm:pr-4 md:pr-5 lg:pr-6 xl:pr-8'
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={typewriter}
          viewport={{ once: true }}
          >
            t e c h n i c a l  s k i l l s
          </motion.p>
        </div>
        <div ref = {skillsRef} className='m-25 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4'>
          {skills.map((skill, index) => (
            <GenSkills
              key={index}
              image={skill.img}
              percentage={skill.percentage}
              animate={skillsInView}
            />
          ))}
        </div>
      </div>




      {/* Projects */}
      <div id="project" className="flex flex-col items-center mb-28 sm:mb-36">
      <div className="flex items-center mb-5 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <p className='text-[#33FFC2] text-[22px] sm:text-[24px] md:text-[25px] lg:text-[24px] xl:text-[25px] 2xl:text-[26px] tracking-widest whitespace-nowrap mr-4'>P r o j e c t s</p>
          <motion.div
            className='h-[1.5px] bg-white flex-grow shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff]'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2 }}
            style={{ originX: 0 }}
          />
        </div>

        <div className='relative rounded-2xl bg-[#3F3A3A] mt-6 w-[90%] sm:w-[75%] md:w-[95%] lg:w-[95%] xl:w-[95%] 2xl:w-[95%] h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-[30rem] xl:h-[32rem]'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
              >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/75 p-4 sm:p-5 text-white rounded-b-2xl">
                <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[3rem] text-[#F533FF]">{project.title}</h2>
                <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#33FFC2] scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>




      {/* Contact Us */}
      <div id="contact" className="mt-10 text-white">
      <motion.h2
        className="text-[#33FFC2] text-[22px] sm:text-[25px] md:text-[30px] tracking-widest text-center mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        C o n t a c t  u s
      </motion.h2>

      <div className="w-full overflow-hidden relative ">
      <a href="https://www.google.com/maps?q=Cavite+Civic+Center,+Palico+IV,+Imus+City,+Cavite+4103" target="_blank" rel="noopener noreferrer">
      <img 
      src={mapImage}
      alt="Cavite Civic Center Location"
      className="w-full object-cover transition-transform duration-300 hover:scale-105 h-[300px] sm:h-[290px] md:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%] 2xl:max-w-[100%]"
      />
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute text-[#F533FF] w-`13` h-13 z-10"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{
        top: '53.9%',
        left: '55.9%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
      }}
    >
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
    </svg>
      </a>

      <div className="absolute bottom-4 left-4  px-4 py-2 rounded-xl">
        <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
          Cavite Civic Center, Palico IV, Imus City, Cavite 4103
        </span>
      </div>
      </div>
    </div>
    </section>
  );
}

export default Homepage;