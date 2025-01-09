// src/components/Manifesto/ManifestoComponent.tsx
import React from 'react';
import StarsBackground from '../StarsBackground';

const ManifestoComponent = () => {
  return (
    <div className="relative container mx-auto py-8">
      <StarsBackground />
      <h1 className="text-4xl font-bold text-center mb-8 gradient-text">
        Manifesto
      </h1>
      <div className="flex flex-col items-center">
        <p className="text-lg text-center text-white max-w-4xl font-bold text-shadow">
          At the heart of innovation and technology at EPFL, we are the Blockchain Student Association, a community driven by a passion for blockchain and its transformative potential.
          <br /><br />
          We are on a mission to build a European hub of blockchain enthusiasts, driving innovation and fostering talent in the blockchain space.
        </p>
      </div>
    </div>
  );
};

export default ManifestoComponent;
