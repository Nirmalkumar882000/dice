import React, { useState } from 'react'
import "./tests.css"

function Tests() {
  const [animation, setAnimation] = useState('');

  const randomDice = () => {
    // Set a fixed value for the dice animation (e.g., 3)
    const fixedValue = 3;
    rollDice(fixedValue);
  };

  const rollDice = (fixedValue) => {
    setAnimation('rolling 7s');

    setTimeout(() => {
      switch (fixedValue) {
        case 1:
          setAnimation('rotateX(90deg) rotateY(90deg)');
          break;

        case 6:
          setAnimation('rotateX(180deg) rotateY(0deg)');
          break;

        case 2:
          setAnimation('rotateX(-90deg) rotateY(0deg)');
          break;

        case 5:
          setAnimation('rotateX(90deg) rotateY(0deg)');
          break;

        case 3:
          setAnimation('rotateX(0deg) rotateY(90deg)');
          break;

        case 4:
          setAnimation('rotateX(0deg) rotateY(-90deg)');
          break;

        default:
          setAnimation('');
          break;
      }
    }, 4050);
  };



  return (
    <div className="container">

        <div className="dice" style={{ animation }}>

            <div className="face front"></div>

            <div className="face back"></div>

            <div className="face top"></div>

            <div className="face bottom"></div>

            <div className="face right"></div>

            <div className="face left"></div>

        </div>

        <button onClick={randomDice} className="roll">

            <h2>Roll Dice</h2>

        </button>

    </div>
  )
}

export default Tests
