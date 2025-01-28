// src/components/Grants/GrantsComponent.tsx
import React from 'react';
import Grant from './Grant';
import StarsBackground from '../StarsBackground';
import placeholder from '../../images/tickets/placeholder.webp';

const grantsData = [
  {
    title: 'Grant 1',
    description: 'Description for grant 1.',
    sponsoredBy: 'Sponsor 1',
    sponsorImage: placeholder,
  },
  {
    title: 'Grant 2',
    description: 'Description for grant 2.',
    sponsoredBy: 'Sponsor 2',
    sponsorImage: placeholder,
  },
  {
    title: 'Grant 3',
    description: 'Description for grant 3.',
  },
];

const GrantsComponent = () => {
  return (
    <div className="relative container mx-auto py-8">
<h1 className="
  text-4xl 
  font-bold 
  text-center 
  mb-8 
  title-shine 
  bg-clip-text 
  text-transparent
  transition-all
  duration-300
  hover:scale-105
">
  Grants
</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {grantsData.map((grant, index) => (
          <Grant
            key={index}
            title={grant.title}
            description={grant.description}
            sponsoredBy={grant.sponsoredBy}
            sponsorImage={grant.sponsorImage}
          />
        ))}
      </div>
    </div>
  );
};

export default GrantsComponent;
