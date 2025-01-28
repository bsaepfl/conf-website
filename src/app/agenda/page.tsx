"use client"
import Navbar from '../components/Navbar';
import ScheduleView from '../components/Agenda/ScheduleView';
import Footer from '../components/Footer';
import StarsBackground from '../components/StarsBackground';

const AgendaPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-base-200">
      <StarsBackground />
      <Navbar />
      <main className="relative flex-grow flex flex-col items-center justify-center pt-24 pb-24 z-0">
        <div className="w-full max-w-7xl ">
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
            Agenda
          </h1>
          <ScheduleView />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgendaPage;
