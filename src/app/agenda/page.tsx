// src/app/agenda/page.tsx
import Navbar from '../components/Navbar';
import AgendaTable from '../components/Agenda/AgendaTable';
import Footer from '../components/Footer';

const AgendaPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Agenda</h1>
        <AgendaTable />
      </main>
      <Footer />
    </div>
  );
};

export default AgendaPage;
