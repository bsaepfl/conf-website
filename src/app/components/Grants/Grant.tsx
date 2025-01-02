// src/components/Grants/Grant.tsx
import React from 'react';
import Image from 'next/image';

const Grant = ({ title, description, sponsoredBy, sponsorImage }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-8 p-4 border border-white">
      <div className="card-body p-6 flex flex-col justify-between h-full">
        <div>
          <h2 className="card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">{title}</h2>
          <p className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">{description}</p>
          {sponsoredBy && sponsorImage && (
            <div className="flex items-center mb-4">
              <Image src={sponsorImage} alt={sponsoredBy} width={50} height={50} className="rounded-full mr-2" />
              <p className="text-sm text-gray-500">Sponsored by {sponsoredBy}</p>
            </div>
          )}
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Grant;
