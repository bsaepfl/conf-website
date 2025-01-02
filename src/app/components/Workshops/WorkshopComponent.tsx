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
      <StarsBackground />
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Workshops</h1>
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
