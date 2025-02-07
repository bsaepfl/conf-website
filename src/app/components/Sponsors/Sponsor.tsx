// src/components/Sponsors/Sponsor.tsx
import React from 'react';
import Image from 'next/image';
import './Sponsor.css'; // Create this new CSS file

const borderColor = {
  platinum: 'shine-border bg-gradient-to-b from-[#2a2a2a] via-[#505050] to-[#2a2a2a]',
  gold: 'border-4 border-yellow-500',
  silver: 'border-4 border-gray-400',
  bronze: 'border-4 border-yellow-700',
};

const Sponsor = ({ logo, name, link, tier }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`
        card h-76 h-48 bg-white shadow-xl mb-8 p-[2px] rounded-xl overflow-hidden
        ${borderColor[tier]}
      `}
    >
      <div className="card-body flex flex-col items-center justify-center bg-white h-full w-full rounded-lg">
        <Image src={logo} alt={name} width={300} height={300} className="rounded-full mb-4" />
        {/* <h2 className="card-title text-2xl font-bold text-center text-black">{name}</h2> */}
      </div>
    </a>
  );
};

export default Sponsor;