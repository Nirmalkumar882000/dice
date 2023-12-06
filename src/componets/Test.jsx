import React, { useState } from 'react'
import "./test.css"

const Test = () => {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);

  const rollDice = () => {
    // Replace random number generation with fixed values
    const newDiceOne = 5; // Set a fixed value for diceOne
    const newDiceTwo = 5; // Set a fixed value for diceTwo

    setDiceOne(newDiceOne);
    setDiceTwo(newDiceTwo);

    console.log(newDiceOne + ' ' + newDiceTwo);

    // Assuming you have classes show-1 to show-6 in your CSS
    for (let i = 1; i <= 6; i++) {
      document.getElementById('dice1').classList.remove('show-' + i);
      if (newDiceOne === i) {
        document.getElementById('dice1').classList.add('show-' + i);
      }
    }

    for (let k = 1; k <= 6; k++) {
      document.getElementById('dice2').classList.remove('show-' + k);
      if (newDiceTwo === k) {
        document.getElementById('dice2').classList.add('show-' + k);
      }
    }
  };

  return (
    <div className="game">
    <div className="container">
      <h1>{diceOne}</h1>
      <div id='dice1' className={`dice dice-one ${diceOne} `}>
        <div id="dice-one-side-one" className='side one'>
          <div className="dot one-1"></div>
        </div>
        <div id="dice-one-side-two" className='side two'>
          <div className="dot two-1"></div>
          <div className="dot two-2"></div>
        </div>
        <div id="dice-one-side-three" className='side three'>
          <div className="dot three-1"></div>
          <div className="dot three-2"></div>
          <div className="dot three-3"></div>
        </div>
        <div id="dice-one-side-four" className='side four'>
          <div className="dot four-1"></div>
          <div className="dot four-2"></div>
          <div className="dot four-3"></div>
          <div className="dot four-4"></div>
        </div>
        <div id="dice-one-side-five" className='side five'>
          <div className="dot five-1"></div>
          <div className="dot five-2"></div>
          <div className="dot five-3"></div>
          <div className="dot five-4"></div>
          <div className="dot five-5"></div>
        </div>
        <div id="dice-one-side-six" className='side six'>
          <div className="dot six-1"></div>
          <div className="dot six-2"></div>
          <div className="dot six-3"></div>
          <div className="dot six-4"></div>
          <div className="dot six-5"></div>
          <div className="dot six-6"></div>
        </div>
      </div>
   </div>
    <div className="container">
      <h1>{diceTwo}</h1>
      <div id='dice2' className={`dice dice-two ${diceTwo}`}>
        <div id="dice-two-side-one" className='side one'>
          <div className="dot one-1"></div>
        </div>
        <div id="dice-two-side-two" className='side two'>
          <div className="dot two-1"></div>
          <div className="dot two-2"></div>
        </div>
        <div id="dice-two-side-three" className='side three'>
          <div className="dot three-1"></div>
          <div className="dot three-2"></div>
          <div className="dot three-3"></div>
        </div>
        <div id="dice-two-side-four" className='side four'>
          <div className="dot four-1"></div>
          <div className="dot four-2"></div>
          <div className="dot four-3"></div>
          <div className="dot four-4"></div>
        </div>
        <div id="dice-two-side-five" className='side five'>
          <div className="dot five-1"></div>
          <div className="dot five-2"></div>
          <div className="dot five-3"></div>
          <div className="dot five-4"></div>
          <div className="dot five-5"></div>
        </div>
        <div id="dice-two-side-six" className='side six'>
          <div className="dot six-1"></div>
          <div className="dot six-2"></div>
          <div className="dot six-3"></div>
          <div className="dot six-4"></div>
          <div className="dot six-5"></div>
          <div className="dot six-6"></div>
        </div>
      </div> 
   </div>
   <div onClick={rollDice} className='roll-button'><button>Roll dice!</button></div>
  </div> 
  )
}

export default Test
