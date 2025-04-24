{/*PICS FOR INTRODUCTION*/}
import juliaPic from '../assets/pics/fdp.png';
import dhenizePic from '../assets/pics/ldp.png';
import jeannenPic from '../assets/pics/bdp.png';

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
export const Infos =[
  {
    id: 1,
    fname: "Julia",
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
    id: 2,
    fname: "Dhenize",
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
    id: 3,
    fname: "Jeannen",
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
