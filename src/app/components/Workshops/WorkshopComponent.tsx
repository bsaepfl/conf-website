// src/components/SideEvents/SideEventsComponent.tsx
import React from 'react';
import Workshop from './Workshop';
import StarsBackground from '../StarsBackground';
import placeholder from '../../images/tickets/placeholder.webp';

const workshopsData = [
  {
    image: placeholder,
    title: 'Workshop 1',
    date: 'Date 1',
    description: 'Description for Workshop 1.',
  },
  {
    image: placeholder,
    title: 'Workshop 2',
    date: 'Date 2',
    description: 'Description for Workshop 2.',
  },
  {
    image: placeholder,
    title: 'Workshop 3',
    date: 'Date 3',
    description: 'Description for Workshop 3.',
  },
];

const WorkshopsComponent = () => {
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
        Workshops
      </h1>
      <div className="flex flex-col items-center">
        {workshopsData.map((event, index) => (
          <Workshop
            key={index}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkshopsComponent;
