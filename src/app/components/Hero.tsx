// components/Hero.tsx
'use client';
import StarsBackground from './StarsBackground';
import Image from 'next/image';
import { useCallback } from 'react';
import ManifestoComponent from './Manifesto/ManifestoComponent';
import SponsorsComponent from './Sponsors/SponsorsComponent';
import ScheduleView from './Agenda/ScheduleView';
import { Speaker } from 'lucide-react';
import SpeakersComponent from './Speakers/SpeakersComponent';
import GrantsComponent from './Grants/GrantsComponent';
import WhatComponent from './What/WhatComponent';
import PanelsComponent from './Panels/PanelsComponent';


const Hero = () => {
  const handleAddToCalendar = useCallback(() => {
    const event = {
      title: 'Privacy x Verifiability Conference',
      description: 'Join us for a deep dive into the latest in blockchain privacy and verifiability',
      location: 'EPFL BC, Lausanne, Switzerland',
      start: new Date('2025-03-07T09:00:00+01:00').toISOString(),
      end: new Date('2025-03-07T18:00:00+01:00').toISOString(),
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, '')}/${event.end.replace(/[-:]/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, '_blank');
  }, []);

  return (
    <div className="relative min-h-[75vh] w-full flex flex-col items-center justify-center bg-base-200">
      <StarsBackground />
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 h-screen">
        <div className="text-center">
          
          <h1 className="text-3xl sm:text-6xl font-bold text-black">BSA Blockchain Conference</h1>
          <h1 className="text-xl sm:text-3xl font-bold text-black">Privacy and Verifiability</h1>

          <p className="sm:text-xl text-base mt-4 text-black">EPFL, March 7th</p>
        </div>
        <div>
            <a className="btn btn-primary mt-6 padding-6 text-white" href="/register">Join as attendee</a>
            <a className="btn btn-primary mt-6 ml-4 text-white" href="https://cryptpad.fr/form/#/2/form/view/VIi0a+XML51M6gBUfB484Tl+umj7stQfGVMGf-1AIFs/">Join as speaker</a>
          </div>
        
        <div className="card w-84 bg-neutral shadow-xl text-white">
         
          
            <div className="card-actions justify-center text-white">
              <button 
                className="btn btn-primary btn-block text-white transform transition-transform duration-300 hover:scale-105 active:scale-95"
                onClick={handleAddToCalendar}
              >
                Save the date
              </button>
            
          </div>
        </div>
      </div>

      <div id="manifesto">
        <ManifestoComponent />
      </div>

      <div id="sponsors">
        <SponsorsComponent />
      </div>

      <div id="panels">
        <PanelsComponent />
      </div>

      <div id="speakers">
        <SpeakersComponent />
      </div>

      {/* <GrantsComponent /> */}
      
      <div id="agenda" className="w-full max-w-7xl ">
  
          
          {/* <ScheduleView /> */}
        </div>

      <div id="more">
        <WhatComponent />
      </div>
      <br />
      <br />

      
    </div>
  );
};

export default Hero;
