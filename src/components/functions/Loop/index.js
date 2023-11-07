import '../../Car/style.css'
import '../../Dog/style.css'
import dogDeath from '../../../images/dogdeath.gif'
import React, { useState, useEffect } from 'react';
import './style.css';
import tdance from '../../../images/tdance.gif';
import hdance from '../../../images/hdance.gif';
import sdance from '../../../images/sdance.gif';
import victoryMusic from '../../../audio/victorysound.mp3';

export function Loop() {
  document.addEventListener('DOMContentLoaded', () => {
    const car = document.querySelector('.carImage');
    const dog = document.querySelector('.dogImage');

    const loop = setInterval(() => {
      const carPosition = car.offsetLeft;
      const dogPosition = +window.getComputedStyle(dog).bottom.replace('px', ' ');

      if (carPosition <= 110 && dogPosition <= 109 && carPosition >= -251) {

        car.style.animation = 'none'
        car.style.left = `${carPosition}px`;

        dog.style.animation = 'none'
        dog.style.bottom = `${carPosition}px`;

        dog.src = dogDeath;
        dog.style.width = '230px'
        dog.style.bottom = '50px'

        clearInterval(loop);
      }
    }, 10);
  });
};


//////////////////////////////////////////////////////////////////////////////////////////////////

export function Score() {
  const [score, setScore] = useState(1);
  const [showCongratulations, setShowCongratulations] = useState(false);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => prevScore + 1);
    }, 1000);

    const car = document.querySelector('.carImage');
    const dog = document.querySelector('.dogImage');
    const carPosition = car.offsetLeft;
    const dogPosition = +window.getComputedStyle(dog).bottom.replace('px', ' ');


    //loser
    if (carPosition <= 110 && dogPosition <= 109 && carPosition >= -251) {
      clearInterval(interval);
    } //victory
    if (score === 10) {
      clearInterval(interval);
      car.style.display = 'none'
      dog.style.display = 'none'
      setShowCongratulations(true);
      const audio = new Audio(victoryMusic);
      audio.play();

    }

    return () => clearInterval(interval);

  }, [score]);


  return (
    <div>
      <h1>Contador:</h1>
      <p>{score.toString().padStart(2, '0')}</p>
      {showCongratulations && (
        <div className='winContainer'>
          <p className='congratulations'>
            <b>Congratulations!!!</b>
          </p>
          <div className="imageContainer">
            <img src={tdance} alt='dancing' />
            <img src={sdance} alt='dancing' />
            <img src={hdance} alt='dancing' />
          </div>
        </div>
      )}


    </div>
  );
}
