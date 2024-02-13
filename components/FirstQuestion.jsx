import { useState } from "react";
import LoveRain from "./LoveRain";
import "./FirstQuestion.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Mine please",
      "With a Pecel Ayam on top",
      "What about a Milk tea",
      "PLEASE MINE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "please mine",
      ":((((",
      "PRETTY PLEASE",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="container-questions">
      {yesPressed ? (
        <>
          <LoveRain />
        </>
      ) : (
        <>
          <img
            className="img-questions"
            src="https://media.tenor.com/ykO-9BGJFDsAAAAi/bubududu-panda.gif"
          />
          <h1 className="text-questions">Do want you and I to love each other more eternally than forever?</h1>
          <div className="button-group">
            <button
              className={`button-yes`}
              style={{ fontSize: 50+yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              style={{fontSize: 60}}
              className=" button-no"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}