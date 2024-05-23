import React, { useEffect, useState } from 'react';
import html_logo from '../Assests/html-5.png'

const Floating = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveIcon = () => {
      const speed = 10;
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;

      setInterval(() => {
        const dx = Math.random() * speed * 20 - speed;
        const dy = Math.random() * speed * 20 - speed;

        x += dx;
        y += dy;

        setPosition({ x, y });
      }, 100 / 60);
    };

    moveIcon();

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="floating-icon" style={{ left: position.x, top: position.y }}>
      <img src={html_logo} alt='' />
    </div>
  );
};

export default Floating;
