// src/components/SideEvents/SideEvent.tsx
import React from 'react';
import Image from 'next/image';

const Workshop = ({ image, title, date, description }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-8 p-4 border border-white">
      <figure className="w-full">
        <Image src={image} alt={title} layout="responsive" width={300} height={200} className="w-full h-auto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">{title}</h2>
        <p className="text-sm text-gray-500 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">{date}</p>
        <p className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
