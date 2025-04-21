import React, { useState, useEffect, useRef } from 'react';

const GenSkills = ({ percentage, image }) => {
  const [progress, setProgress] = useState(0);
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
          setProgress(0); // Reset when out of view if you want to replay each time
        }
      },
      { threshold: 0.6 } // Trigger when 60% of the element is visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!animate) return;

    let start = null;
    const duration = 1000;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progressTime = timestamp - start;
      const newProgress = Math.min((progressTime / duration) * percentage, percentage);
      setProgress(newProgress);
      if (newProgress < percentage) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [percentage, animate]);

  const radius = 40;
  const stroke = 7;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center m-4">
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
          <img src={image} alt="skill icon" className="w-14 h-14 rounded-full object-cover" />
        </div>
      </div>

      <p className="text-[#F533FF] text-[1.5rem] mt-2 font-semibold">{Math.round(progress)}%</p>
    </div>
  );
};

export default GenSkills;
