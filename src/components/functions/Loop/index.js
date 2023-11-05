import '../../Car/style.css'
import '../../Dog/style.css'
import dogDeath from '../../../images/dogdeath.gif'
import React, { useState, useEffect } from 'react';


export function Loop() {
    document.addEventListener('DOMContentLoaded', () => {
    const car = document.querySelector('.carImage');
    const dog = document.querySelector('.dogImage');

    const loop = setInterval(() => {
        const carPosition = car.offsetLeft;
        const dogPosition = +window.getComputedStyle(dog).bottom.replace('px',' ');
    
        if (carPosition <= 110 && dogPosition <= 109 && carPosition >= -251) {

            car.style.animation = 'none'
            car.style.left = `${carPosition}px`;

            dog.style.animation = 'none'
            dog.style.bottom = `${carPosition}px`;

            dog.src =dogDeath;
            dog.style.width='230px'
            dog.style.bottom ='50px'

            clearInterval(loop);
        } 

        
    }, 10);
    });
};

export function Score() {
    const [score, setScore] = useState(1);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setScore((prevScore) => prevScore + 1);
      }, 100); 
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
        <h1>Contador:</h1>
        <p>{score.toString().padStart(6, '0')}</p>
      </div>
    );
  }
