import React from "react";
import { useState } from "react";
import "./PoemLetter.css";
import FirstQuestion from "./FirstQuestion";
export default function Page() {
  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
      const phrases = [
        'Biology says you`re 7% blood',
        'Chemistry says you`re 70% water',
        'Physics says you`re 99.9% empty space',
        'I Say you`re 100% Beautiful <3'
      ];

      return phrases[Math.min(noCount, phrases.length - 1)];
  };

      return(
        <>
          {
            noCount < 4 ? 
            <div className="container">
            <img src="https://media1.tenor.com/m/Ye7jK4dV19wAAAAC/goma-happy.gif" className="img-poem" alt="lovely" />
            <div className="speech up">
                {noCount === 0 ? 'Hewo dear please click the button >.<' : getNoButtonText()}
            </div>
            <button className="button" onClick={handleNoClick}>
              <span className="text-button">Love</span>
            </button>
            </div>
          :
          <FirstQuestion />
        } 
        </>  
      )
}