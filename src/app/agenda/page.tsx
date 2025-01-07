"use client"
import Navbar from '../components/Navbar';
import ScheduleView from '../components/Agenda/ScheduleView';
import Footer from '../components/Footer';

const AgendaPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <div className="w-full max-w-7xl px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Agenda</h1>
          <ScheduleView />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgendaPage;