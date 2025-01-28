// src/components/Grants/Grant.tsx
import React from 'react';
import Image from 'next/image';

const Grant = ({ title, description, sponsoredBy, sponsorImage }) => {
  return (
    <div className="card w-full bg-neutral shadow-xl mb-8 p-4">
      <div className="card-body p-6 flex flex-col justify-between h-full">
        <div>
          <h2 className="card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300">
            {title}
          </h2>
          <p className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400">
            {description}
          </p>
          {sponsoredBy && sponsorImage && (
            <div className="flex items-center mb-4">
              <Image 
                src={sponsorImage} 
                alt={sponsoredBy} 
                width={50} 
                height={50} 
                className="rounded-full mr-2" 
              />
              <p className="text-sm text-slate-300">Sponsored by {sponsoredBy}</p>
            </div>
          )}
        </div>
        <div className="card-actions justify-center">
          <button className="
            btn 
            btn-primary 
            text-white
            transition-all 
            duration-300 
            ease-in-out
            hover:scale-105
            hover:shadow-lg
            hover:brightness-110
            active:scale-95
            active:shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-primary
          ">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grant;
