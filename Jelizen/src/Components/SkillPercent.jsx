import React, { useEffect, useState } from 'react';

const SkillPercent = ({ percentage, image, animate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!animate) return;

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < percentage) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [percentage, animate]);

  const radius = 40;
  const stroke = 7;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <div className="relative w-[80px] h-[80px]">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="transparent"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#33FFC2"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            style={{
              strokeDashoffset,
              transition: 'stroke-dashoffset 0.5s',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <img src={image} className="w-[3.5rem] h-[3.5rem] rounded-full" />
        </div>
      </div>

      <p className="text-[#F533FF] text-[1.5rem] mt-2">{progress} %</p>
    </div>
  );
};

export default SkillPercent;
