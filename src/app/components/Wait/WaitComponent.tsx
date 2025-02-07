'use client';

import React from 'react';

const WhatComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center container mx-auto py-8 w-full">
      <h1 className="text-4xl font-bold text-black mb-8">
        Wait, there's more!
      </h1>
      <p className="text-lg text-gray-700 font-bold max-w-2xl">
        Interested in developing your own project on privacy and verifiability? 
        Don't hesitate to join our hackathon and win amazing prizes!
        It will take place on March 8th and 9th, 2025, the days after the conference.
        Join now!
      </p>
      <a 
        className="mt-6 px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md"
        href="/register"
      >
        Join the Hackathon
      </a>
    </div>
  );
};

export default WhatComponent;
