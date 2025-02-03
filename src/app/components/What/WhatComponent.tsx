"use client";

import React, { useState, useEffect } from 'react';
import StarsBackground from '../StarsBackground';
import img from '../../images/map/image.png';


const WhatComponent = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-03-07') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative container mx-auto py-8 padding-top max-h-[600px] w-full">
      <StarsBackground />
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold  bg-clip-text text-black mb-8">
            What is Privacy and Verifiability?
          </h1>
        </div>
        <div className="md:w-1/2">
          <p className="text-lg text-gray-700 bg-clip-text text-black font-bold">
          Privacy is the ability to control personal information and protect oneself from unwanted intrusion. It involves selectively sharing data and maintaining personal boundaries in both physical and digital spaces.
            <br /><br />
            Verifiability is the capacity to prove something true through empirical evidence and reproducible methods. It ensures claims can be objectively tested and validated, forming a cornerstone of scientific and rational inquiry.
            <br /><br />         
          </p>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-black mb-8">When ?</h2>
        <p className="text-lg text-gray-700 bg-clip-text text-black font-bold">March 7th, 2025, or in: </p>
        <span className="countdown font-mono text-2xl text-black">
          <span style={{"--value": timeLeft.days || 0}}></span>:
          <span style={{"--value": timeLeft.hours || 0}}></span>:
          <span style={{"--value": timeLeft.minutes || 0}}></span>:
          <span style={{"--value": timeLeft.seconds || 0}}></span>
        </span>
        <br />
        <br />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-black mb-8">Where?</h2>
        <p className="text-lg text-gray-700 bg-clip-text text-black font-bold">EPFL, Lausanne, Switzerland</p>
        <div className="mt-4 flex flex-col items-center">
          <img src={img.src} alt="EPFL Map Preview" className="w-full max-w-md rounded-lg shadow-lg" />
          <a
            href="https://goo.gl/maps/8QvU8ZQ1y2XjVb2f9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2 block"
          >
            View the location on a larger map
          </a>
        </div>
        </div>
        
      </div>

    </div>
  );
};

export default WhatComponent;
