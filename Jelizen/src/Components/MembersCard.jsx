import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MemberCard = ({ name, role, isHovered, onHover, onLeave, image }) => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    let interval;

    if (isHovered) {
      setShowName(true);
      interval = setInterval(() => {
        setShowName(prev => !prev); 
      }, 3000); 
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative flex flex-col items-center space-y-2">
      <motion.div
        className={`relative rounded-xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
          ${isHovered ? 'w-[250px] h-[280px] bg-[#33FFC2]' : 'w-[200px] h-[230px] bg-[#333333] brightness-75 scale-90'}`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        layout
      >
        <img
          src={image}
          alt={name}
          className={`absolute left-1/2 transform -translate-x-1/2 w-50 h-65 shadow-xl 
            transition-transform duration-500 ${isHovered ? 'scale-100' : 'scale-80'}`}
        />
      </motion.div>

      <p
        className={`text-[1.5rem] font-semibold text-center transition-all duration-500 
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        style={{ color: '#F533FF' }}
      >
        {showName ? name : role}
      </p>
    </div>
  );
};

export default MemberCard;
