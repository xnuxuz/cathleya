import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './HelloMine.css';

const HelloMine = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["",  "Cathleya", "Pretty", "Sweetie", "Cutie"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='container'>
      <img className='img' src="https://media1.tenor.com/m/QEr1ZgplI0AAAAAC/kiss.gif" alt="valentine kiss" />
      <div className="main-text">Happy</div>
      <div className="main-text">Valentine</div>
      <div className="main-text">My ❤ </div>
      <div ref={textRef} className="text"></div>
    </div>
  );
};

export default HelloMine;