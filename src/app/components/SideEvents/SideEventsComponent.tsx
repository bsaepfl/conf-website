// src/components/SideEvents/SideEventsComponent.tsx
import React from 'react';
import SideEvent from './SideEvent';
import StarsBackground from '../StarsBackground';
import placeholder from '../../images/tickets/placeholder.webp';

const sideEventsData = [
  {
    image: placeholder,
    title: 'Side Event 1',
    date: 'Date 1',
    description: 'Description for side event 1.',
  },
  {
    image: placeholder,
    title: 'Side Event 2',
    date: 'Date 2',
    description: 'Description for side event 2.',
  },
  {
    image: placeholder,
    title: 'Side Event 3',
    date: 'Date 3',
    description: 'Description for side event 3.',
  },
];

const SideEventsComponent = () => {
  return (
    <div className="relative container mx-auto py-8 ">
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
  Side Events
</h1>

      <div className="flex flex-col items-center">
        {sideEventsData.map((event, index) => (
          <SideEvent
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

export default SideEventsComponent;
