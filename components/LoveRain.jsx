import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./LoveRain.css";
import HelloMine from './HelloMine';

const LoveRain = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart = (
        <FontAwesomeIcon
          key={Date.now()} // Use a unique key to avoid React warnings
          className="fas fa-heart"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
          icon={faHeart}
        />
      );
      setHearts(prevHearts => [...prevHearts, newHeart]);
    };

    const removeHeart = () => {
      setHearts(prevHearts => {
        if (prevHearts.length > 10) {
          prevHearts.shift(); // Remove the first heart from the array
        }
        return prevHearts;
      });
    };

    const intervalId = setInterval(createHeart, 100);
    const intervalId2 = setInterval(removeHeart, 100);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, []);

  return (
    <div>
      {hearts}
      <HelloMine />
    </div>
  );
};

export default LoveRain;