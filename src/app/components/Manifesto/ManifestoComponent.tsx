// src/components/Manifesto/ManifestoComponent.tsx
import React from 'react';
import StarsBackground from '../StarsBackground';

const ManifestoComponent = () => {
  return (
    <div className="relative container mx-auto py-8">
        <StarsBackground />
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        Manifesto
      </h1>
      <div className="flex flex-col items-center ">
        {/* <div className="backdrop-blur-md bg-black/2 p-6 rounded-lg shadow-md max-w-2xl"> */}
            <p className="text-lg text-center text-gray-700 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-bold ">
        At the heart of innovation and technology at EPFL, we are the Blockchain Student Association, a community driven by a passion for blockchain and its transformative potential.

We are on a mission to build a European hub of blockchain enthusiasts, driving innovation and fostering talent in the blockchain space.
            </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ManifestoComponent;
