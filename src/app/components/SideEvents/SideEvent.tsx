// src/components/SideEvents/SideEvent.tsx
import React from 'react';
import Image from 'next/image';

const SideEvent = ({ image, title, date, description }) => {
  return (
    <div className="card w-full bg-neutral shadow-xl mb-8 p-4 ">
      <figure className="w-full">
        <Image src={image} alt={title} layout="responsive" width={300} height={200} className="w-full h-auto" />
      </figure>
      <div className="card-body">
  <h2 className="card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
    {title}
  </h2>
  <p className="text-sm mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
    {date}
  </p>
  <p className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
    {description}
  </p>
  <div className="card-actions justify-center">
    <button className="
      btn 
      btn-primary 
      btn-block
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
      Learn More
    </button>
  </div>
</div>


    </div>
  );
};

export default SideEvent;
