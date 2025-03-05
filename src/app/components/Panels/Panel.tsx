import React, { useState } from 'react';
import Link from 'next/link';  // Import Next.js Link

const Panel = ({ title, description, link, speakers }) => {
  const [showSpeakers, setShowSpeakers] = useState(false);

  const toggleSpeakers = () => {
    setShowSpeakers(!showSpeakers);
  };

  // Separate the first speaker as the moderator
  const moderator = speakers[0];
  const otherSpeakers = speakers.slice(1);

  return (
    <div className="card w-full bg-secondary shadow-xl mb-8 p-4">
      <figure className="w-full">
        {/* <Image src={image} alt={title} layout="responsive" width={300} height={200} className="w-full h-auto" /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold bg-clip-text text-white ">
          {title}
        </h2>
        <p className="mb-4 bg-clip-text text-white">
          {description}
        </p>
        <div className="card-actions justify-center">
          <a
            className="
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
              focus:ring-primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <button
            className="
               btn 
              btn-secondary 
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
              focus:ring-primary"
            onClick={toggleSpeakers}
          >
            {showSpeakers ? 'Hide Speakers' : 'Show Speakers'}
          </button>
        </div>
        {showSpeakers && (
          <div className="mt-4 text-white">
            <div className="mb-2">
              <span className="font-bold bg-clip-text text-primary from-gray-300 via-gray-400 to-gray-500">
                Moderator:
              </span>
              <span className="ml-2">{moderator}</span>
            </div>
            <ul>
              {otherSpeakers.map((speaker, index) => (
                <li key={index} className="bg-clip-text text-white bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
                  {speaker}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Panel;
