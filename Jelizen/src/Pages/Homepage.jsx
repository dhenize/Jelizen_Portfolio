import React, { useState } from 'react';
import logobig from '../assets/pics/logobig.png';
import { motion } from 'framer-motion';
import MemberCard from '../Components/MembersCard'; 


import juliaPic from '../assets/pics/fdp.png';
import dhenizePic from '../assets/pics/ldp.png';
import jeannenPic from '../assets/pics/bdp.png';


const teamMembers = [
  { name: 'Julia', role: 'UI/UX Designer', image: juliaPic },
  { name: 'Dhenize', role: 'Back-End Developer', image: dhenizePic },
  { name: 'Jeannen', role: 'Front-End Developer', image: jeannenPic }
];




function Homepage() {
  //Introduction
  const introText = "Jalizen is committed to make difference in digital landscape through creating intuitive and visually stunning websites.";

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

  




  return (
    <section>
      {/* OPENING (LOGO, NAME, TAGLINE) */}
      <div className='m-60 flex flex-col justify-center items-center'>
        <div className="grid gap-2">
          <img className="max-h-35" src={logobig} alt="Logo" />
        </div>

        <div className='flex justify-center items-center'>
          <p className='text-[30px] text-[#33FFC2] font-semibold tracking-[15px]'>
            Jelizen
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <p className='text-[13px] text-white tracking-wide'>
            expand your imagination
          </p>
        </div>
      </div>

      {/* INTRODUCTION TEXT */}
      <motion.div
        className='text-center px-4 sm:px-6 lg:px-10 py-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className='text-[16px] sm:text-[18px] md:text-[20px] text-white max-w-4xl mx-auto leading-relaxed flex flex-wrap justify-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {words.map((word, index) => (
            <motion.span
              className='inline-block mr-[4px]'
              key={index}
              initial={{ color: '#ffffff99' }}
              animate={{ color: '#ffffff' }}
              transition={{ delay: index * delayperword, duration: 3 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.p>
      </motion.div>

      {/* MISSION AND VISION */}
      <motion.div
        className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-16 sm:py-20 mt-16 sm:mt-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>

          {/* MISSION LINE */}
          <div className='flex flex-col'>
            <div className='flex items-center mb-5 w-full'>
              <motion.p
                className='text-[#33FFC2] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] tracking-widest whitespace-nowrap mr-4 overflow-hidden'
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
                whileInView={{ scaleX: 2 }}
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
          <div className='mt-55 sm:mt-15 md:mt-55'>
            <div className='flex items-center mb-5 w-full justify-end'>
              <motion.div
                className='h-[1.5px] bg-white flex-grow shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff] mr-2 sm:mr-4 max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[350px]'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 2 }}
                transition={{ duration: 2 }}
                style={{ originX: 1 }}
              />
              <motion.p
                className='text-[#33FFC2] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] tracking-widest whitespace-nowrap text-right overflow-hidden'
                initial="hidden"
                whileInView="visible"
                custom={1}
                variants={typewriter}
                viewport={{ once: true }}
              >
                v  i s  i  o  n
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
              className='text-[#33FFC2] text-[22px] sm:text-[25px] tracking-widest whitespace-nowrap mr-4 overflow-hidden'
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              transition={{ duration: 2 }}
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
      <div className='mb-55'>
        <div className='flex items-center mb-5 w-full justify-end'>
          <motion.div
            className='h-[1.5px] bg-white flex-grow shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff] mr-4'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0.9 }}
            transition={{ duration: 2 }}
            style={{ originX: 1 }}
          />
          <p className='text-[#33FFC2] text-[25px] tracking-widest whitespace-nowrap text-right pr-5'>t e c h n i c a l  s k i l l s</p>
        </div>
      </div>

      {/* Projects */}
      <div id = "project" className='flex flex-col mb-55'>
        <div className='flex items-center mb-5 w-full'>
          <p className='text-[#33FFC2] text-[25px] tracking-widest whitespace-nowrap mr-4 pl-5'>P r o j e c t s</p>
          <motion.div
            className='h-[1.5px] bg-white flex-grow shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff]'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0.9 }}
            transition={{ duration: 2 }}
            style={{ originX: 0 }}
          />
        </div>
      </div>

      {/* Contact Us */}
      <div id = "contact" className='px-10 py-20 mt-20'>
        <motion.h2
          className='text-[#33FFC2] text-[25px] tracking-widest text-center mb-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Contact Us
        </motion.h2>
      </div>
    </section>
  );
}

export default Homepage;