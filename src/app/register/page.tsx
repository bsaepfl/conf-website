// src/app/tickets/page.tsx
import Navbar from '../components/Navbar';
import TicketsComponent from '../components/Tickets/Tickets';
import Footer from '../components/Footer';

const TicketsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <TicketsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default TicketsPage;
