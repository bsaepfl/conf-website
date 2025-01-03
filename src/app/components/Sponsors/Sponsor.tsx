// src/components/Sponsors/Sponsor.tsx
import React from 'react';
import Image from 'next/image';

const borderColor = {
  platinum: 'border-4 border-transparent bg-gradient-to-b from-violet-600 via-violet-600 to-indigo-600 p-1',
  gold: 'border-4 border-yellow-500',
  silver: 'border-4 border-gray-400',
  bronze: 'border-4 border-yellow-700',
};

const Sponsor = ({ logo, name, link, tier }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`card w-64 h-64 bg-white shadow-xl mb-8 ${tier === 'platinum' ? 'p-1' : 'p-4'} ${borderColor[tier]}`}>
      <div className="card-body flex flex-col items-center justify-center bg-white">
        <Image src={logo} alt={name} width={100} height={100} className="rounded-full mb-4" />
        <h2 className="card-title text-2xl font-bold text-center">{name}</h2>
      </div>
    </a>
  );
};

export default Sponsor;
