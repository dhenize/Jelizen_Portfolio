import React, { useEffect, useState } from "react";

const symbols = ['(', ')', '{', '}', '[', ']', '/', '\\', '@', '&', '#', '%', ':', '"', '!', '<', '>', '.', ',', ';'];
const colors = ['#CC844E', '#FFD84D', '#03C8B6', '#FE939A', '#FFD84D'];

const getRandom = (min, max) => Math.random() * (max - min) + min;

const Symbol = ({ id }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const left = getRandom(0, 100);
    const size = getRandom(16, 32); // px
    const duration = getRandom(10, 30); // seconds
    const delay = getRandom(0, 20); // seconds
    const color = colors[Math.floor(Math.random() * colors.length)];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];

    setStyle({
      left: `${left}%`,
      fontSize: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      color,
      animationName: "float",
    });

  }, []);

  return (
    <span
      className="absolute top-0 animate-float"
      style={style}
    >
      {symbols[Math.floor(Math.random() * symbols.length)]}
    </span>
  );
};

const BackgroundSymbols = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {Array.from({ length: 40 }).map((_, i) => (
        <Symbol key={i} id={i} />
      ))}
    </div>
  );
};

export default BackgroundSymbols;
